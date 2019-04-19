function bot () {

//////////////////
//   bot code
/////////////////

// permission URL https://discordapp.com/oauth2/authorize?&client_id=568139051538841603&scope=bot&permissions=268561430
// the token of your bot - https://discordapp.com/developers/applications/me
var token = process.env.BOT_TOKEN;

// import the discord.js module
var Discord = require('discord.js');
var channelID = process.env.channelID

// create an instance of a Discord Client, and call it bot
var bot = new Discord.Client({show: false});

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
  console.log(String(1234));
  //message.channel.sendMessage("StatBot: Online");
});

// create an event listener for messages
bot.on('message', message => {
  console.log('testing')
  console.log('message.channel: ',message.channel.id)

  if (message.channel.id !== channelID) return;
  console.log('i made it past the if')

  var curTimestamp = message.createdTimestamp;
  var content = message.content;

  var lines = content.split('\n');
  var botOptions = lines[0];
  var matchInfo = lines[1];

  var names = [];
  var penalties = [];
  var comments = [];
  
  var result = "";
  var matches = [];
  //extract names, comments, and penalties
  //get current winner line
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
        var civ = lNames[1].split(' ').pop()
        console.log('civ: ',civ)
        for(var l = 1; l < lNames.length; ++l)
        {
          var lName = lNames[l];
          lName = lName.trim();
          var matchData = {Winner:wName, Loser:lName, whoWon: 1, civName:civ};
          matches.push(matchData);
        }
      }
    }
  }
  console.log(matches);
});
// log our bot in
bot.login(token);
}
module.exports= { bot };