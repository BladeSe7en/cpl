const app = require('../server');

function getPlayerStats(names) {
  return new Promise((resolve, reject) => {
    const { Player } = app.models;
    const playerData = names.map(name => {
      const defaultSkill = 1500;
      const defaultRatingDiviation = 2500
      const defaultVolatility = 0.06
      return Player.findOrCreate(
        { where: { name: name } },
        {
          name: name,
          careerSkill: defaultSkill,
          careerSkillRatingDiviation: defaultRatingDiviation,
          careerSkillVolatility: defaultVolatility,
          careerHighestSkill: defaultSkill,
          careerWins: 0,
          careerLosses: 0,
          careerPercent: 0,
          careerBestLeader: 'none',
          careerAllLeader: {
            "ZuluShaka":0,
             "SwedenKristina":0,
             "SumeriaGilgamesh":0,
             "SpainPhilipII":0,
             "ScythiaTomyris":0,
             "ScotlandRobertTheBruce":0,
             "RussiaPeterTheGreat":0,
            "RomeTrajan":0,
             "PolandJadwiga":0,
             "PhoeniciaDido":0,
             "PersiaCyrus":0,
             "OttomanSuleiman":0,
             "NubiaAmanitore":0,
             "NorwayHaraldHardrada":0,
             "MongoliaGenghisKhan":0,
            "MapucheLautaro":0,
             "MaoriKupe":0,
             "MaliMansa":0,
             "MacedonAlexander":0,
             "KoreaSeondeok":0,
             "KongoMvembaANzinga":0,
             "KhmerJayavarmanVII":0,
             "JapanHojoTokimune":0,
            "IndonesiaGitarja":0,
             "IndiaGandhi":0,
             "IndiaChandragupta":0,
             "IncaPachacuti":0,
             "HungaryMatthias":0,
             "GreecePericles":0,
             "GreeceGorgo":0,
             "GermanyFrederickBarbarossa":0,
            "GeorgiaTamar":0,
             "FranceCatherinedeMedici":0,
             "EnglandVictoria":0,
             "EnglandFranceEleanor":0,
             "EgyptCleopatra":0,
             "DutchWilhelmina":0,
             "CreePoundmaker":0,
            "ChinaQinShiHuang":0,
             "CanadaWilfrid":0,
             "BrazilPedroII":0,
             "AztecMontezuma":0,
             "AustraliaJohnCurtin":0,
             "ArabiaSaladin":0,
             "AmericaTheodoreRoosevelt":0
            },
            careerSeasonSkill: defaultSkill,
            careerSeasonSkillRatingDiviation: defaultRatingDiviation,
            careerSeasonSkillVolatility: defaultVolatility,
            careerSeasonWins: 0,
            careerSeasonLosses: 0,
            careerSeasonPercent: 0,
          teamSkill: defaultSkill,
          teamSkillRatingDiviation: defaultRatingDiviation,
          teamSkillVolatility: defaultVolatility,
          teamHighestSkill: defaultSkill,
          teamWins: 0,
          teamLosses: 0,
          teamPercent: 0,
          teamBestLeader: 'none',
          teamAllLeader: {
            "ZuluShaka":0,
             "SwedenKristina":0,
             "SumeriaGilgamesh":0,
             "SpainPhilipII":0,
             "ScythiaTomyris":0,
             "ScotlandRobertTheBruce":0,
             "RussiaPeterTheGreat":0,
            "RomeTrajan":0,
             "PolandJadwiga":0,
             "PhoeniciaDido":0,
             "PersiaCyrus":0,
             "OttomanSuleiman":0,
             "NubiaAmanitore":0,
             "NorwayHaraldHardrada":0,
             "MongoliaGenghisKhan":0,
            "MapucheLautaro":0,
             "MaoriKupe":0,
             "MaliMansa":0,
             "MacedonAlexander":0,
             "KoreaSeondeok":0,
             "KongoMvembaANzinga":0,
             "KhmerJayavarmanVII":0,
             "JapanHojoTokimune":0,
            "IndonesiaGitarja":0,
             "IndiaGandhi":0,
             "IndiaChandragupta":0,
             "IncaPachacuti":0,
             "HungaryMatthias":0,
             "GreecePericles":0,
             "GreeceGorgo":0,
             "GermanyFrederickBarbarossa":0,
            "GeorgiaTamar":0,
             "FranceCatherinedeMedici":0,
             "EnglandVictoria":0,
             "EnglandFranceEleanor":0,
             "EgyptCleopatra":0,
             "DutchWilhelmina":0,
             "CreePoundmaker":0,
            "ChinaQinShiHuang":0,
             "CanadaWilfrid":0,
             "BrazilPedroII":0,
             "AztecMontezuma":0,
             "AustraliaJohnCurtin":0,
             "ArabiaSaladin":0,
             "AmericaTheodoreRoosevelt":0
            },
            teamSeasonSkill: defaultSkill,
            teamSeasonSkillRatingDiviation: defaultRatingDiviation,
            teamSeasonSkillVolatility: defaultVolatility,
            teamSeasonWins: 0,
            teamSeasonLosses: 0,
            teamSeasonPercent: 0,
          duelSkill: defaultSkill,
          duelHighestSkill: defaultSkill,
          duelSkillRatingDiviation: defaultRatingDiviation,
          duelSkillVolatility: defaultVolatility,
          duelWins: 0,
          duelLosses: 0,
          duelPercent: 0,
          duelBestLeader: 'none',
          duelAllLeader: {
            "ZuluShaka":0,
             "SwedenKristina":0,
             "SumeriaGilgamesh":0,
             "SpainPhilipII":0,
             "ScythiaTomyris":0,
             "ScotlandRobertTheBruce":0,
             "RussiaPeterTheGreat":0,
            "RomeTrajan":0,
             "PolandJadwiga":0,
             "PhoeniciaDido":0,
             "PersiaCyrus":0,
             "OttomanSuleiman":0,
             "NubiaAmanitore":0,
             "NorwayHaraldHardrada":0,
             "MongoliaGenghisKhan":0,
            "MapucheLautaro":0,
             "MaoriKupe":0,
             "MaliMansa":0,
             "MacedonAlexander":0,
             "KoreaSeondeok":0,
             "KongoMvembaANzinga":0,
             "KhmerJayavarmanVII":0,
             "JapanHojoTokimune":0,
            "IndonesiaGitarja":0,
             "IndiaGandhi":0,
             "IndiaChandragupta":0,
             "IncaPachacuti":0,
             "HungaryMatthias":0,
             "GreecePericles":0,
             "GreeceGorgo":0,
             "GermanyFrederickBarbarossa":0,
            "GeorgiaTamar":0,
             "FranceCatherinedeMedici":0,
             "EnglandVictoria":0,
             "EnglandFranceEleanor":0,
             "EgyptCleopatra":0,
             "DutchWilhelmina":0,
             "CreePoundmaker":0,
            "ChinaQinShiHuang":0,
             "CanadaWilfrid":0,
             "BrazilPedroII":0,
             "AztecMontezuma":0,
             "AustraliaJohnCurtin":0,
             "ArabiaSaladin":0,
             "AmericaTheodoreRoosevelt":0
            },
            duelSeasonSkill: defaultSkill,
            duelSeasonSkillRatingDiviation: defaultRatingDiviation,
            duelSeasonSkillVolatility: defaultVolatility,
            duelSeasonWins: 0,
            duelSeasonLosses: 0,
            duelSeasonPercent: 0,
          ffaSkill: defaultSkill,
          ffaSkillRatingDiviation: defaultRatingDiviation,
          ffaSkillVolatility: defaultVolatility,
          ffaHighestSkill: defaultSkill,
          ffaWins: defaultSkill,
          ffaLosses: 0,
          ffaPercent: 0,
          ffaBestLeader: 'none',
          ffaAllLeader: {
            "ZuluShaka":0,
             "SwedenKristina":0,
             "SumeriaGilgamesh":0,
             "SpainPhilipII":0,
             "ScythiaTomyris":0,
             "ScotlandRobertTheBruce":0,
             "RussiaPeterTheGreat":0,
            "RomeTrajan":0,
             "PolandJadwiga":0,
             "PhoeniciaDido":0,
             "PersiaCyrus":0,
             "OttomanSuleiman":0,
             "NubiaAmanitore":0,
             "NorwayHaraldHardrada":0,
             "MongoliaGenghisKhan":0,
            "MapucheLautaro":0,
             "MaoriKupe":0,
             "MaliMansa":0,
             "MacedonAlexander":0,
             "KoreaSeondeok":0,
             "KongoMvembaANzinga":0,
             "KhmerJayavarmanVII":0,
             "JapanHojoTokimune":0,
            "IndonesiaGitarja":0,
             "IndiaGandhi":0,
             "IndiaChandragupta":0,
             "IncaPachacuti":0,
             "HungaryMatthias":0,
             "GreecePericles":0,
             "GreeceGorgo":0,
             "GermanyFrederickBarbarossa":0,
            "GeorgiaTamar":0,
             "FranceCatherinedeMedici":0,
             "EnglandVictoria":0,
             "EnglandFranceEleanor":0,
             "EgyptCleopatra":0,
             "DutchWilhelmina":0,
             "CreePoundmaker":0,
            "ChinaQinShiHuang":0,
             "CanadaWilfrid":0,
             "BrazilPedroII":0,
             "AztecMontezuma":0,
             "AustraliaJohnCurtin":0,
             "ArabiaSaladin":0,
             "AmericaTheodoreRoosevelt":0
            },
            ffaSeasonSkill: defaultSkill,
            ffaSeasonSkillRatingDiviation: defaultRatingDiviation,
            ffaSeasonSkillVolatility: defaultVolatility,
            ffaSeasonWins: 0,
            ffaSeasonLosses: 0,
            ffaSeasonPercent: 0,
        }
      );
    });
    Promise.all(playerData)
      .then(results => resolve(results))
      .catch(err => reject(new Error('could not return results')));
  });
}

module.exports = { getPlayerStats };

//["player0", "player1", "player2"]






