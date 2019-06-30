'use strict';

module.exports = function(News) {
    News.submitNewsletter = function (names, cb) {
		submitNewsletter(names)
			.then(response => cb(null, response))
			.catch(err => cb(err))
	}

	News.remoteMethod('submitNewsletter', {
		description: 'post newsletter to db.',
		accepts: [{
			arg: 'date',
			type: 'number'
        },
        {
            arg: 'lines',
            type: 'array'
        }],
		http: {
			path: '/submitNewsletter',
			verb: 'get'
		},
		returns: {
			arg: 'data',
			type: 'array',
			root: true
		}
	})

	News.updateNewsletter = function (names, cb) {
		updateNewsletter(names)
			.then(response => cb(null, response))
			.catch(err => cb(err))
	}

	News.remoteMethod('updateNewsletter', {
		description: 'update existing newsletter.',
		accepts: [{
			arg: 'id',
			type: 'string'
        },
        {
            arg: 'lines',
            type: 'array'
        }],
		http: {
			path: '/updateNewsletter',
			verb: 'patch'
		},
		returns: {
			arg: 'data',
			type: 'array',
			root: true
		}
	})
};
