'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var myBot = require('../server/utils/discordReportBot');
var Discord = require('discord.js');
const fs = require('fs');
var moment = require('moment');
//var bot = new Discord.Client();
require('dotenv').config();
var app = (module.exports = loopback());
app.use(loopback.static('public'));

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
///////////////
//  steam login
///////////////

const date = moment().format('lll');
var steam = require('steam-login');
const path = require('path');
var Redirect = require('react-router');
require("http");

app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));
app.use(steam.middleware({
  realm: 'http://localhost:3000/',
  verify: 'http://localhost:3000/verify',
  apiKey: process.env.STEAM_API_KEY
}));

app.get('/', function (req, res) {
  res.send(req.user == null ? 'not logged in' : 'hello ' + req.user.username).end();
});

app.get('/authenticate', steam.authenticate(), function (req, res) {
  console.log(req.user);
  // res.redirect('/ForumMain');
});

app.get('/verify', steam.verify(), function (req, res) {
  fs.appendFile('log.csv', (' steam ID: ' + req.user._json.steamid) + '\t' + ('user name: ' + req.user._json.personaname) + '\t' + date + '\n', (err) => {
      if (err) throw err;
  res.redirect('/ForumMain')
  });
});

app.get('/logout', steam.enforceLogin('/'), function (req, res) {
  req.logout();
  res.redirect('/');
});

boot(app, __dirname, function (err) {
  if (err) throw err;

  if (require.main === module) app.start();
});
