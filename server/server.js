'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
const fs = require('fs');
var moment = require('moment');
var app = (module.exports = loopback());
app.use(loopback.static('public'));
require('../server/utils/discordReportBot');
require('discord.js');
require('dotenv').config();
require('../server/utils/discordNewsletterBot');

app.start = function () {
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

///////////////////////////
//  steam login
// this login code is what I was refering to in the README. I had no idea how to get this middleware to work for localhost, heroku, player login, and admin login.
// whenever I would deploy to heroku, I would have to comment out the appropiate lines. Same goes for player/ admin login. after a sucsessful login the middleware
// redirects the user back to the verify: 'http://localhost:3000/verify route. I tried going into the package its self to duplicate the code to where a player login
// and an admin login run two different functions and return on two different verify routes but I could not get it to work

// get your steam api key here: https://steamcommunity.com/dev/apikey
const date = moment().format('lll');
var steam = require('steam-login');
require("http");

app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));
app.use(steam.middleware({
  // if youre using the website locally 
  // realm: 'http://localhost:3000',
  // verify: 'http://localhost:3000/verify',
  //verifyAdmin: 'http://localhost:3000/verifyAdmin',

  // if youre using the website with heroku
  realm:'https://civplayers-website.herokuapp.com',
  verify: 'https://civplayers-website.herokuapp.com/verify',
  apiKey: process.env.STEAM_API_KEY
}));

app.get('/ForumMain', function(req, res) {
  console.log('req: ',req)
  res.send(req.user == null ? 'not logged in' : req.user._json).end();
});

app.get('/authenticate', steam.authenticate(), function (req, res) {
  console.log('testing auth route');
});

app.get('/verify', steam.verify(), function (req, res) {
  // this line is what logs into my scv file. As noted in the README this needs to log in the db and be displayed in the admin dashboard
  fs.appendFile('log.csv', (' steam ID: ' + req.user._json.steamid) + '\t' + ('name: ' + req.user._json.personaname) + '\t' + ('profile: ' + req.user.profile) + '\t' + ('avatar: ' + req.user.avatar.small) + '\t' + ('date: ' + date) + '\n', (err) => {
    if (err) throw err;
    res.redirect('/#/ForumMain');
  });
});

app.get('/logout', steam.enforceLogin('/'), function (req, res) {
  req.logout();
  res.redirect('/');
});

boot(app, __dirname, function (err) {
  if (err) throw err;

  if (require.main === module) {
    app.io = require('socket.io')(app.start());
    require('socketio-auth')(app.io, {
      authenticate: function (socket, value, callback) {
  
          var AccessToken = app.models.AccessToken;
          //get credentials sent by the client
          var token = AccessToken.find({
            where:{
              and: [{ userId: value.userId }, { id: value.id }]
            }
          }, function(err, tokenDetail){
            if (err) throw err;
            if(tokenDetail.length){
              callback(null, true);
            } else {
              callback(null, false);
            }
          }); 
        }
    });
  
    app.io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('disconnect', function(){
          console.log('user disconnected');
      });
    });
  }
})
