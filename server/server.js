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

// const http = require('http').Server(app);
// const io = require('socket.io')(http);

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
    //Comment this app.start line and add following lines
    //app.start();
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
