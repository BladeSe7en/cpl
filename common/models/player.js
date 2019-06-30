'use strict';

const { getPlayerStats } = require('../../server/utils/getPlayerStats');
const { glicko } = require('../../server/utils/glicko');
module.exports = function (Player) {

	Player.getPlayerStats = function (names, cb) {
		getPlayerStats(names)
			.then(response => cb(null, response))
			.catch(err => cb(err))
	}

	Player.remoteMethod('getPlayerStats', {
		description: 'Gets all of the players data.',
		accepts: {
			arg: 'names',
			type: 'array'
		},
		http: {
			path: '/getPlayersStats',
			verb: 'get'
		},
		returns: {
			arg: 'data',
			type: 'array',
			root: true
		}
	})

	Player.glicko = function (allPlayersStats, names, matches, gameType, cb) {
		glicko(allPlayersStats, names, matches, gameType)
			.then(response => cb(null, response))
			.catch(err => cb(err))
	}

	Player.remoteMethod('glicko', {
		description: 'Calculate the players new ELO scores.',
		accepts:
		[
			{
				arg: 'allPlayersStats',
				type: 'array'
			},
			{
				arg: 'matches',
				type: 'array'
			},
			{
				arg: 'gameType',
				type: 'string'
			}
		],
		http: {
			path: '/glicko',
			verb: 'get'
		},
		returns: {
			arg: 'data',
			type: 'array',
			root: true
		}
	})

	Player.beforeRemote('glicko', async function (ctx) {
        const names = ctx.allNamesSet;
        getPlayerStats(names)
        .then(() => next())
        .catch(err => {
            next(new Error(err.message));
        })
    });


};


// this goes in the json file

// {
// 	"name": "career",
// 	"base": "PersistedModel",
// 	"idInjection": true,
// 	"options": {
// 	  "validateUpsert": true
// 	},
// 	"skill": {
// 	  "type": "number",
// 	  "required": true,
// 	  "default": 1500
// 	},
// 	"ratingDiviation": {
// 	  "type": "number",
// 	  "default": 2500
// 	},
// 	"volatility": {
// 	  "type": "number",
// 	  "default": 0.06
// 	},
// 	"highestSkill": {
// 	  "type": "number",
// 	  "default": 1500
// 	},
// 	"wins": {
// 	  "type": "number",
// 	  "required": true,
// 	  "default": 1500
// 	},
// 	"losses": {
// 	  "type": "number",
// 	  "default": 0
// 	},
// 	"winPercent": {
// 	  "type": "number",
// 	  "default": 0
// 	},
// 	"leaders": {
// 	  "type": "array",
// 	  "required": true,
// 	  "default": {
// 		"ZuluShaka": 0,
// 		"SwedenKristina": 0,
// 		"SumeriaGilgamesh": 0,
// 		"SpainPhilipII": 0,
// 		"ScythiaTomyris": 0,
// 		"ScotlandRobertTheBruce": 0,
// 		"RussiaPeterTheGreat": 0,
// 		"RomeTrajan": 0,
// 		"PolandJadwiga": 0,
// 		"PhoeniciaDido": 0,
// 		"PersiaCyrus": 0,
// 		"OttomanSuleiman": 0,
// 		"NubiaAmanitore": 0,
// 		"NorwayHaraldHardrada": 0,
// 		"MongoliaGenghisKhan": 0,
// 		"MapucheLautaro": 0,
// 		"MaoriKupe": 0,
// 		"MaliMansa": 0,
// 		"MacedonAlexander": 0,
// 		"KoreaSeondeok": 0,
// 		"KongoMvembaANzinga": 0,
// 		"KhmerJayavarmanVII": 0,
// 		"JapanHojoTokimune": 0,
// 		"IndonesiaGitarja": 0,
// 		"IndiaGandhi": 0,
// 		"IndiaChandragupta": 0,
// 		"IncaPachacuti": 0,
// 		"HungaryMatthias": 0,
// 		"GreecePericles": 0,
// 		"GreeceGorgo": 0,
// 		"GermanyFrederickBarbarossa": 0,
// 		"GeorgiaTamar": 0,
// 		"FranceCatherinedeMedici": 0,
// 		"EnglandVictoria": 0,
// 		"EnglandFranceEleanor": 0,
// 		"EgyptCleopatra": 0,
// 		"DutchWilhelmina": 0,
// 		"CreePoundmaker": 0,
// 		"ChinaQinShiHuang": 0,
// 		"CanadaWilfrid": 0,
// 		"BrazilPedroII": 0,
// 		"AztecMontezuma": 0,
// 		"AustraliaJohnCurtin": 0,
// 		"ArabiaSaladin": 0,
// 		"AmericaTheodoreRoosevelt": 0
// 	  }
// 	},
// 	"seasonSkill": {
// 	  "type": "number",
// 	  "required": true,
// 	  "default": 1500
// 	},
// 	"seasonRatingDiviation": {
// 	  "type": "number",
// 	  "default": 2500
// 	},
// 	"seasonVolatility": {
// 	  "type": "number",
// 	  "default": 0.06
// 	},
// 	"seasonWins": {
// 	  "type": "number",
// 	  "required": true,
// 	  "default": 0
// 	},
// 	"seasonLosses": {
// 	  "type": "number",
// 	  "required": true,
// 	  "default": 0
// 	},
// 	"seasonPercent": {
// 	  "type": "number",
// 	  "default": 0
// 	},
// 	"properties": {},
// 	"validations": [],
// 	"relations": {},
// 	"acls": [],
// 	"methods": {}
//   }
  