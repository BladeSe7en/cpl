'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

require('dotenv').config()

var app = (module.exports = loopback());

app.use(loopback.static('public'));
 
app.start = function() {
 return app.listen(function() {
   app.emit('started');
   var baseUrl = app.get('url').replace(/\/$/, '');
   console.log('Web server listening at: %s', baseUrl);
   if (app.get('loopback-component-explorer')) {
     var explorerPath = app.get('loopback-component-explorer').mountPath;
     console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
   }
 });
};

//////////////////
//   bot code
/////////////////

// permission URL https://discordapp.com/oauth2/authorize?&client_id=568139051538841603&scope=bot&permissions=268561430
// the token of your bot - https://discordapp.com/developers/applications/me
var token = process.env.BOT_TOKEN;

var Discord = require('discord.js');
var channelID = process.env.channelID

var bot = new Discord.Client({show: false});

bot.on('ready', () => {
  console.log('I am ready!');
  console.log(String(1234));
});

bot.on('message', message => {
  console.log('testing')
  console.log('message.channel: ',message.channel.id)

  if (message.channel.id !== channelID) return;
  var content = message.content;

  var lines = content.split('\n');
  var matches = [];
  //extract names get current winner line
  for(var i = 2; i < lines.length; ++i)
  {
    for(var j = i+1; j < lines.length; ++j)
    {
      var wNames = lines[i].split('@');
      console.log("Wnames:");
      console.log(wNames);
      for(var k = 1; k < wNames.length; ++k)
      {
        var wName = wNames[k];
        wName = wName.trim();
        var lNames = lines[j].split('@');
        console.log("Lnames:");
        console.log(lNames);
        var losingCiv = lNames[1].split(' ').pop()
        var winningCiv = wNames[1].split(' ').pop()
        console.log('losingCiv: ',losingCiv)
        console.log('winningCiv: ',winningCiv)
        for(var l = 1; l < lNames.length; ++l)
        {
          var lName = lNames[l];
          lName = lName.trim();
          var matchData = {Winner:wName, Loser:lName, whoWon: 1, winningCivName: winningCiv, losingCivName: losingCiv};
          matches.push(matchData);
        }
      }
    }
  }
  console.log(matches);
});
bot.login(token);

boot(app, __dirname, function(err) {
  if (err) throw err;

  if (require.main === module) app.start();
});
