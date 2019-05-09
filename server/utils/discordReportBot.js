// permission URL https://discordapp.com/oauth2/authorize?&client_id=568139051538841603&scope=bot&permissions=268561430
// the token of your bot - https://discordapp.com/developers/applications/me
// require('dotenv').config();
// var Discord = require('discord.js');
// //const glicko = require('./glicko');
// class myBot {
//   constructor() {
//       var token = process.env.BOT_TOKEN;
//     var channelID = process.env.channelID;
//     this.bot = new Discord.Client({ show: false });
//     this.bot.login(token);

//     this.bot.on('ready', () => {
//       console.log('I am ready!');
//       console.log(String(1234));
//     });
//     this.bot.on('message', message => {
//       console.log('testing')
//       console.log('message.channel: ', message.channel.id)

//       if (message.channel.id !== channelID) return;
//       console.log('i made it past the if')

//       var content = message.content;
//       var firstLine = content.split('\n').shift();
//       content.replace(/(CivFR)|-KC-|[SCRAP]|[SL]|-=SunZ=-|(TDF)|(MSM)/g, '')
//       console.log('this is the first line: ', firstLine)
//       console.log('this is filtered content: ',content)
//       var gameType = ''
//       if (firstLine.toLowerCase().includes('ffa')) {
//         gameType = 'ffa'
//       }
//       if (firstLine.toLowerCase().includes('team')) {
//         gameType = 'team'
//       }
//       if (firstLine.toLowerCase().includes('duel')) {
//         gameType = 'duel'
//       }
//       var lines = content.split('\n');
//       var matches = [];
//       var allNames = [];
//       //get current winner line
//       for (let i = 2; i < lines.length; ++i) {
//         for (let j = i + 1; j < lines.length; ++j) {
//           var wNames = lines[i].split('@');
//           console.log("Wnames:");
//           console.log(wNames);
//           allNames.push(wNames[1].split(' ').shift())
//           for (let k = 1; k < wNames.length; ++k) {
//             var wName = wNames[k];
//             wName = wName.trim();
//             var lNames = lines[j].split('@');
//             console.log("Lnames:");
//             console.log(lNames);
//             allNames.push(lNames[1].split(' ').shift())
//             var civ = lNames[1].split(' ').pop()
//             console.log('civ: ', civ)
//             for (let l = 1; l < lNames.length; ++l) {
//               var lName = lNames[l];
//               lName = lName.trim();
//               var matchData = { Winner: wName, Loser: lName, whoWon: 1, civName: civ };
//               matches.push(matchData);
//             }
//           }
//         }
//       }
//       console.log('this is matches: ', matches)
//       var allNamesSet = [...new Set(allNames)]
//       console.log('this is allNames: ', allNames)
//       console.log('this is allNamesSet: ', allNamesSet)
//       console.log('this is game type: ',gameType)
//       var allPlayerStats = [];
      //glicko(allPlayerStats, allNamesSet, gameType)
//     })
//   }
// }

// module.exports = new myBot();

