'use strict';

const { getPlayerStats } = require('../../server/utils/getPlayerStats');

module.exports = function(Player) {

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
};


