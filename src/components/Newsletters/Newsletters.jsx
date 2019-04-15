import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/Navbar';
var glicko2 = require('glicko2');

class Newsletters extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
          var settings = {
              tau: 0.5,
              rating: 1500,
              rd: 200,
              vol: 0.06
          };
  
          var ranking = new glicko2.Glicko2(settings);
       
          var gameType= 'ffa'
          
          
          if (gameType === 'ffa') {

//I am working in this componentDidMount because I got tired of having to plug in all my values every time I wanted to test this remote method.
// allPlayerStats is the data that I get back from getPlayerStats remote method. The goal of this new method is to take old players stats, run them
// through this glicko function and then post to the db with the new updated stats. you can find the glicko docs at  server/utils/glicko_docs.js
// my return makePlayers = ..... map is trying to recreate this line of code dynamically where var bob equals the player name, 1400 equals ffaSlill, 30 equals 
// ffaRatingDiviation, and 0.06 equals ffaVolitility:    var Bob = ranking.makePlayer(1400, 30, 0.06);


            const allPlayerStats= [[{"name":"player0","careerSkill":2080,"careerHighestSkill":1500,"careerWins":260,"careerLosses":100,"careerPercent":72,"careerBestLeader":"ZuluShaka","careerAllLeader":["ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka"],"id":3,"highestCareerSkill":1770,"careerSeasonWins":210,"careerSeasonLosses":21,"careerSeasonPercent":91,"teamSkill":1780,"highestTeamSkill":1500,"teamWins":210,"teamLosses":10,"teamPercent":95,"teamBestLeader":"IndiaGandhi","teamAllLeader":["ZuluShaka","SwedenKristina","GeorgiaTamar","SumeriaGilgamesh","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","MapucheLautaro","MaoriKupe","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","AustraliaJohnCurtin","HungaryMatthias","GreecePericles","GreeceGorgo","MaoriKupe","MaliMansa","MacedonAlexander","FranceCatherinedeMedici","EnglandVictoria","EnglandFranceEleanor","EgyptCleopatra","DutchWilhelmina","CreePoundmaker","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","GermanyFrederickBarbarossa"],"teamSeasonWins":20,"teamSeasonLosses":2,"teamSeasonPercent":91,"duelSkill":1780,"highestDuelSkill":1500,"duelWins":10,"duelLosses":45,"duelPercent":72,"duelBestLeader":"HungaryMatthias","duelAllLeader":["ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","KhmerJayavarmanVII","JapanHojoTokimune","IndonesiaGitarja","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","MapucheLautaro","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","IndiaGandhi","IndiaGandhi","IndiaGandhi","IndiaGandhi","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","GermanyFrederickBarbarossa"],"duelSeasonWins":210,"duelSeasonLosses":21,"duelSeasonPercent":91,"ffaSkill":1980,"highestffaSkill":1500,"ffaWins":230,"ffaLosses":109,"ffaPercent":67,"ffaBestLeader":"MapucheLautaro","ffaAllLeader":["ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","MapucheLautaro","MaoriKupe","MaliMansa","ChinaQinShiHuang","CanadaWilfrid","KoreaSeondeok","KongoMvembaANzinga","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","IndonesiaGitarja","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","ZuluShaka","MapucheLautaro","MaoriKupe","MaliMansa","MacedonAlexander","FranceCatherinedeMedici","EnglandVictoria","EnglandFranceEleanor","EgyptCleopatra","DutchWilhelmina","CreePoundmaker","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","JapanHojoTokimune","JapanHojoTokimune","JapanHojoTokimune","JapanHojoTokimune","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","GermanyFrederickBarbarossa"],"ffaSeasonWins":25,"ffaSeasonLosses":54,"ffaSeasonPercent":72,"careerHighSkill":2180,"teamHighSkill":1780,"duelHighSkill":1880,"ffaHighSkill":1980},false],[{"name":"player1","careerSkill":2080,"careerHighestSkill":1500,"careerWins":78,"careerLosses":80,"careerPercent":49,"careerBestLeader":"SwedenKristina","careerAllLeader":["ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","MapucheLautaro","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","IndonesiaGitarja","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","FranceCatherinedeMedici","EnglandVictoria","EnglandFranceEleanor","EgyptCleopatra","DutchWilhelmina","CreePoundmaker","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","IndonesiaGitarja","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","GermanyFrederickBarbarossa"],"id":4,"highestCareerSkill":1330,"careerSeasonWins":40,"careerSeasonLosses":28,"careerSeasonPercent":59,"teamSkill":1990,"highestTeamSkill":1500,"teamWins":65,"teamLosses":87,"teamPercent":42,"teamBestLeader":"KoreaSeondeok","teamAllLeader":["ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ChinaQinShiHuang","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","IndonesiaGitarja","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","KhmerJayavarmanVII","JapanHojoTokimune","AustraliaJohnCurtin","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","GermanyFrederickBarbarossa","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","SwedenKristina","SumeriaGilgamesh","ZuluShaka","MapucheLautaro","MaoriKupe","MaliMansa","MacedonAlexander","FranceCatherinedeMedici","EnglandVictoria","EnglandFranceEleanor","EgyptCleopatra","DutchWilhelmina","CreePoundmaker","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo"],"teamSeasonWins":54,"teamSeasonLosses":43,"teamSeasonPercent":56,"duelSkill":1300,"highestDuelSkill":1500,"duelWins":21,"duelLosses":11,"duelPercent":63,"duelBestLeader":"AztecMontezuma","duelAllLeader":["ZuluShaka","SwedenKristina","SumeriaGilgamesh","SwedenKristina","SumeriaGilgamesh","MapucheLautaro","MaoriKupe","MaliMansa","ChinaQinShiHuang","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KongoMvembaANzinga","KhmerJayavarmanVII","JapanHojoTokimune","IndonesiaGitarja","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo","GermanyFrederickBarbarossa","KhmerJayavarmanVII","JapanHojoTokimune","AustraliaJohnCurtin","HungaryMatthias","GreecePericles","GreeceGorgo","SumeriaGilgamesh","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","IndonesiaGitarja","AustraliaJohnCurtin","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo"],"duelSeasonWins":34,"duelSeasonLosses":76,"duelSeasonPercent":31,"ffaSkill":1770,"highestffaSkill":1500,"ffaWins":90,"ffaLosses":23,"ffaPercent":80,"ffaBestLeader":"BrazilPedroII","ffaAllLeader":["SwedenKristina","SumeriaGilgamesh","SwedenKristina","SumeriaGilgamesh","MapucheLautaro","MaoriKupe","MaliMansa","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KongoMvembaANzinga","KhmerJayavarmanVII","AustraliaJohnCurtin","HungaryMatthias","GreecePericles","GreeceGorgo","SwedenKristina","GeorgiaTamar","SumeriaGilgamesh","SwedenKristina","SumeriaGilgamesh","MapucheLautaro","MaoriKupe","MaliMansa","MacedonAlexander","GeorgiaTamar","FranceCatherinedeMedici","EnglandVictoria","EnglandFranceEleanor","EgyptCleopatra","DutchWilhelmina","CreePoundmaker","ChinaQinShiHuang","CanadaWilfrid","BrazilPedroII","AztecMontezuma","MaoriKupe","MaliMansa","MacedonAlexander","KoreaSeondeok","KongoMvembaANzinga","KhmerJayavarmanVII","AustraliaJohnCurtin","IndiaGandhi","IndiaChandragupta","IncaPachacuti","HungaryMatthias","GreecePericles","GreeceGorgo"],"ffaSeasonWins":22,"ffaSeasonLosses":15,"ffaSeasonPercent":60,"careerHighSkill":2080,"teamHighSkill":1990,"duelHighSkill":1300,"ffaHighSkill":1780},false],[{"name":"player2","careerSkill":1680,"careerHighestSkill":1500,"careerWins":84,"careerLosses":32,"careerPercent":72,"careerBestLeader":"GreeceGorgo","careerAllLeader": [  "SwedenKristina",  "GeorgiaTamar",  "SumeriaGilgamesh",  "SwedenKristina",  "SumeriaGilgamesh",  "MapucheLautaro",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "IndonesiaGitarja",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo",  "GermanyFrederickBarbarossa",  "GeorgiaTamar",  "FranceCatherinedeMedici",  "EnglandVictoria",  "EnglandFranceEleanor",  "EgyptCleopatra",  "DutchWilhelmina",  "CreePoundmaker",  "ChinaQinShiHuang",  "CanadaWilfrid",  "BrazilPedroII",  "AztecMontezuma",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "AustraliaJohnCurtin",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo"],"id": 9,"highestCareerSkill": 1760,"careerSeasonWins": 260,"careerSeasonLosses": 62,"careerSeasonPercent": 80,"teamSkill": 1890,"highestTeamSkill": 1500,"teamWins": 65,"teamLosses": 44,"teamPercent": 60,"teamBestLeader": "ChinaQinShiHuang","teamAllLeader": [  "SwedenKristina",  "GeorgiaTamar",  "SumeriaGilgamesh",  "SwedenKristina",  "KongoMvembaANzinga",  "ChinaQinShiHuang",  "CanadaWilfrid",  "BrazilPedroII",  "AztecMontezuma",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "IndonesiaGitarja",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo",  "GermanyFrederickBarbarossa",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "AustraliaJohnCurtin",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo",  "SwedenKristina",  "GeorgiaTamar",  "SumeriaGilgamesh",  "SwedenKristina",  "SumeriaGilgamesh",  "MapucheLautaro",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "GeorgiaTamar",  "FranceCatherinedeMedici",  "EnglandVictoria",  "EnglandFranceEleanor",  "EgyptCleopatra",  "DutchWilhelmina",  "CreePoundmaker",  "ChinaQinShiHuang",  "CanadaWilfrid",  "BrazilPedroII",  "AztecMontezuma",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "IndonesiaGitarja",  "AustraliaJohnCurtin",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo"],"teamSeasonWins": 203,"teamSeasonLosses": 28,"teamSeasonPercent": 88,"duelSkill": 1580,"highestDuelSkill": 1500,"duelWins": 10,"duelLosses": 21,"duelPercent": 32,"duelBestLeader": "KongoMvembaANzinga","duelAllLeader": [  "SwedenKristina",  "GeorgiaTamar",  "SumeriaGilgamesh",  "SwedenKristina",  "SumeriaGilgamesh",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "ChinaQinShiHuang",  "CanadaWilfrid",  "BrazilPedroII",  "AztecMontezuma",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "IndonesiaGitarja",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo",  "GermanyFrederickBarbarossa",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "AustraliaJohnCurtin",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo",  "SwedenKristina",  "GeorgiaTamar",  "SumeriaGilgamesh",  "SwedenKristina",  "SumeriaGilgamesh",  "MapucheLautaro",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "GeorgiaTamar",  "FranceCatherinedeMedici",  "EnglandVictoria",  "EnglandFranceEleanor",  "EgyptCleopatra",  "DutchWilhelmina",  "CreePoundmaker",  "ChinaQinShiHuang",  "CanadaWilfrid",  "BrazilPedroII",  "AztecMontezuma",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "AustraliaJohnCurtin",  "AustraliaJohnCurtin",  "AustraliaJohnCurtin",  "AustraliaJohnCurtin",  "IndonesiaGitarja",  "AustraliaJohnCurtin",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo"],"duelSeasonWins": 10,"duelSeasonLosses": 32,"duelSeasonPercent": 24,"ffaSkill": 1550,"highestffaSkill": 1500,"ffaWins": 70,"ffaLosses": 59,"ffaPercent": 54,"ffaBestLeader": "MacedonAlexander","ffaAllLeader": [  "SwedenKristina",  "GeorgiaTamar",  "SumeriaGilgamesh",  "SwedenKristina",  "SumeriaGilgamesh",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "ChinaQinShiHuang",  "CanadaWilfrid",  "BrazilPedroII",  "AztecMontezuma",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "IndonesiaGitarja",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo",  "GermanyFrederickBarbarossa",  "KhmerJayavarmanVII",  "JapanHojoTokimune",  "AustraliaJohnCurtin",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo",  "SwedenKristina",  "GeorgiaTamar",  "SumeriaGilgamesh",  "SwedenKristina",  "SumeriaGilgamesh",  "MapucheLautaro",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "GeorgiaTamar",  "FranceCatherinedeMedici",  "EnglandVictoria",  "EnglandFranceEleanor",  "EgyptCleopatra",  "DutchWilhelmina",  "CreePoundmaker",  "ChinaQinShiHuang",  "CanadaWilfrid",  "BrazilPedroII",  "AztecMontezuma",  "MaoriKupe",  "MaliMansa",  "MacedonAlexander",  "KoreaSeondeok",  "KongoMvembaANzinga",  "KhmerJayavarmanVII",  "IndonesiaGitarja",  "AustraliaJohnCurtin",  "IndiaGandhi",  "IndiaChandragupta",  "IncaPachacuti",  "HungaryMatthias",  "GreecePericles",  "GreeceGorgo"],"ffaSeasonWins": 43,"ffaSeasonLosses": 26,"ffaSeasonPercent": 62,"careerHighSkill": 1787,"teamHighSkill": 1890,"duelHighSkill": 1580,"ffaHighSkill": 1780},false]];
            
            console.log('allPlayerStats[0][0].name: ',allPlayerStats[0][0].name)   //this will return player0
            console.log('allPlayerStats[0][0].ffaSkill: ',allPlayerStats[0][0].ffaSkill) //this will return 1980
            const createVariable = () => {
              const nameList = [];
              allPlayerStats.map(playerName => {
              return  nameList.push(playerName[0].name)
              })
              makeThePlayers(nameList)
            }
            createVariable()

            function makeThePlayers(nameList) {
         var madePlayers =[]
              allPlayerStats.map((playerName, i) => {
              console.log('i: ',i) 
              console.log('nameList[i]: ',nameList[i])
           var namme ={[nameList[i]]: ranking.makePlayer(playerName[0].ffaSkill, playerName[0].ffaRatingDiviation, playerName[0].ffaVolatility)}
           madePlayers.push(namme)
          }); 
          evaluate(madePlayers)
        }
        function evaluate(madePlayers) {
          console.log('madePlayers', madePlayers)
          console.log('player0---: ',madePlayers[0].player0),
          console.log('player1---: ',madePlayers[1].player1),
          console.log('player2---: ',madePlayers[2].player2)
          
          const matches = [
            [madePlayers[0].player0, madePlayers[1].player1, 1],
            [madePlayers[0].player0, madePlayers[2].player1, 1],
            [madePlayers[1].player1, madePlayers[2].player2, 1]];
            
            ranking.updateRatings(matches)
            
           return madePlayers.map(i => (
              console.log(`${madePlayers[i]} new rating: ` + madePlayers[i].getRating()),
              console.log(`${madePlayers[i]} new rating deviation: ` + madePlayers[i].getRd()),
              console.log(`${madePlayers[i]} new volatility: ` + madePlayers[i].getVol())
              ));
            }




                 // updatedStats[ffaSkill] = player.name.getRating()
                 // updatedStats[ratingDeviation] = player.name.getRd(),
                 // updatedStats[volatility] = player.name.getVol();
              }
              

             // everything between here and and the render is another attempt to do what i am trying to do in the createVariable(), makeThePlayers(), and evaluate()



          // heres what I have so far. What I want to happen is have playerName[0].name 
// be the variable name and set that equal to the rest of the equation. That
// way I can plug in the variable player0 into the matches array to run my 
// calculations. The problem I am having is when the code is getting to the 
// const matches array it is saying that player0 is undefined.
// heres what I do know: 
// allPlayerStats is a properly formatted json object.
// I have console logged every bracket/dot notation property separately to know 
// that all of them are written in proper syntax. 
 //allPlayerStats.map(playerName => (
  //[playerName[0].name] = ranking.makePlayer(playerName[0].ffaSkill, playerName[0].ffaRatingDiviation, playerName[0].ffaVolatility)
  //));
  // the expected output of the above map would look like this and all of // that data comes from the allPlayerStats object:
  // var player0 = ranking.makePlayer(1989, 200, 0.06);
  // var player1 = ranking.makePlayer(1500, 200, 0.06);
  // var player2 = ranking.makePlayer(1750, 300, 0.06);
  // then each one of those variables would be listed as shown below in the matches array
  //  const matches = [
  // [player0, player1, 1], 
  // [player0, player2, 1], 
  // [player1, player2, 1]];
  
  // ranking.updateRatings(matches)
  
  // allPlayerStats.map(playerName => (
  // console.log(`${playerName[0].name} new rating: ` + playerName[0].name.getRating()),
  // console.log(`${playerName[0].name} new rating deviation: ` + playerName[0].name.getRd()),
  // console.log(`${playerName[0].name} new volatility: ` + playerName[0].name.getVol())
  // ));
            }
  render() {
      return (
        <div>
        <Navbar />
        <div className='banner'>
        <div className='banner-opacity'>
            <h1>Nothing here yet</h1>
        </div>
        </div>
    </div>
      )
    }
}

export default Newsletters;




// [
//   [
//     {
//       "name": "player0",
//       "careerSkill": 2080,
//       "careerHighestSkill": 1500,
//       "careerWins": 260,
//       "careerLosses": 100,
//       "careerPercent": 72,
//       "careerBestLeader": "ZuluShaka",
//       "careerAllLeader": [
//         "ZuluShaka"
//       ],
//       "id": 3,
//       "highestCareerSkill": 1770,
//       "careerSeasonWins": 210,
//       "careerSeasonLosses": 21,
//       "careerSeasonPercent": 91,
//       "teamSkill": 1780,
//       "highestTeamSkill": 1500,
//       "teamWins": 210,
//       "teamLosses": 10,
//       "teamPercent": 95,
//       "teamBestLeader": "IndiaGandhi",
//       "teamAllLeader": [
//         "GermanyFrederickBarbarossa"
//       ],
//       "teamSeasonWins": 20,
//       "teamSeasonLosses": 2,
//       "teamSeasonPercent": 91,
//       "duelSkill": 1780,
//       "highestDuelSkill": 1500,
//       "duelWins": 10,
//       "duelLosses": 45,
//       "duelPercent": 72,
//       "duelBestLeader": "HungaryMatthias",
//       "duelAllLeader": [
//         "ZuluShaka"
//       ],
//       "duelSeasonWins": 210,
//       "duelSeasonLosses": 21,
//       "duelSeasonPercent": 91,
//       "ffaSkill": 1980,
//       "highestffaSkill": 1500,
//       "ffaWins": 230,
//       "ffaLosses": 109,
//       "ffaPercent": 67,
//       "ffaBestLeader": "MapucheLautaro",
//       "ffaAllLeader": [
//         "ZuluShaka"
//       ],
//       "ffaSeasonWins": 25,
//       "ffaSeasonLosses": 54,
//       "ffaSeasonPercent": 72,
//       "careerHighSkill": 2180,
//       "teamHighSkill": 1780,
//       "duelHighSkill": 1880,
//       "ffaHighSkill": 1980
//     },
//     false
//   ],
//     [
//       {
//         "name": "player1",
//         "careerSkill": 2080,
//         "careerHighestSkill": 1500,
//         "careerWins": 78,
//         "careerLosses": 80,
//         "careerPercent": 49,
//         "careerBestLeader": "SwedenKristina",
//         "careerAllLeader": [
//           "ZuluShaka",
//           "GermanyFrederickBarbarossa"
//         ],
//         "id": 4,
//         "highestCareerSkill": 1330,
//         "careerSeasonWins": 40,
//         "careerSeasonLosses": 28,
//         "careerSeasonPercent": 59,
//         "teamSkill": 1990,
//         "highestTeamSkill": 1500,
//         "teamWins": 65,
//         "teamLosses": 87,
//         "teamPercent": 42,
//         "teamBestLeader": "KoreaSeondeok",
//         "teamAllLeader": [
//           "GreeceGorgo"
//         ],
//         "teamSeasonWins": 54,
//         "teamSeasonLosses": 43,
//         "teamSeasonPercent": 56,
//         "duelSkill": 1300,
//         "highestDuelSkill": 1500,
//         "duelWins": 21,
//         "duelLosses": 11,
//         "duelPercent": 63,
//         "duelBestLeader": "AztecMontezuma",
//         "duelAllLeader": [
//           "GreeceGorgo"
//         ],
//         "duelSeasonWins": 34,
//         "duelSeasonLosses": 76,
//         "duelSeasonPercent": 31,
//         "ffaSkill": 1770,
//         "highestffaSkill": 1500,
//         "ffaWins": 90,
//         "ffaLosses": 23,
//         "ffaPercent": 80,
//         "ffaBestLeader": "BrazilPedroII",
//         "ffaAllLeader": [
//           "GreeceGorgo"
//         ],
//         "ffaSeasonWins": 22,
//         "ffaSeasonLosses": 15,
//         "ffaSeasonPercent": 60,
//         "careerHighSkill": 2080,
//         "teamHighSkill": 1990,
//         "duelHighSkill": 1300,
//         "ffaHighSkill": 1780
//       },
//       false
//     ],
//     [
//       {
//         "name": "player2",
//         "careerSkill": 1680,
//         "careerHighestSkill": 1500,
//         "careerWins": 84,
//         "careerLosses": 32,
//         "careerPercent": 72,
//         "careerBestLeader": "GreeceGorgo",
//         "careerAllLeader": [
//           "GreeceGorgo"
//         ],
//         "id": 9,
//         "highestCareerSkill": 1760,
//         "careerSeasonWins": 260,
//         "careerSeasonLosses": 62,
//         "careerSeasonPercent": 80,
//         "teamSkill": 1890,
//         "highestTeamSkill": 1500,
//         "teamWins": 65,
//         "teamLosses": 44,
//         "teamPercent": 60,
//         "teamBestLeader": "ChinaQinShiHuang",
//         "teamAllLeader": [
//           "GreeceGorgo"
//         ],
//         "teamSeasonWins": 203,
//         "teamSeasonLosses": 28,
//         "teamSeasonPercent": 88,
//         "duelSkill": 1580,
//         "highestDuelSkill": 1500,
//         "duelWins": 10,
//         "duelLosses": 21,
//         "duelPercent": 32,
//         "duelBestLeader": "KongoMvembaANzinga",
//         "duelAllLeader": [
//           "GreeceGorgo"
//         ],
//         "duelSeasonWins": 10,
//         "duelSeasonLosses": 32,
//         "duelSeasonPercent": 24,
//         "ffaSkill": 1550,
//         "highestffaSkill": 1500,
//         "ffaWins": 70,
//         "ffaLosses": 59,
//         "ffaPercent": 54,
//         "ffaBestLeader": "MacedonAlexander",
//         "ffaAllLeader": [
//           "GreeceGorgo"
//         ],
//         "ffaSeasonWins": 43,
//         "ffaSeasonLosses": 26,
//         "ffaSeasonPercent": 62,
//         "careerHighSkill": 1787,
//         "teamHighSkill": 1890,
//         "duelHighSkill": 1580,
//         "ffaHighSkill": 1780
//       },
//       false
//     ]
//   ]
