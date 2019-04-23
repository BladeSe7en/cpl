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
        console.log('this is names in before remote: ',names)
        getPlayerStats(names)
        .then(() => next())
        .catch(err => {
            next(new Error(err.message));
        })
    });


};


