'use strict';

module.exports = function (Thread) {
    Thread.deleteAll = function (cb) {
        return Thread.destroyAll();
    };
    Thread.remoteMethod('destroyAll', {
        isStatic: true,
        description: 'Delete all matching records',
        accessType: 'WRITE',
        accepts: {
            arg: 'where', 
            type: 'object', 
            description: 'filter.where object'
        },
        http: {
            verb: 'del', 
            path: '/'
        } 
    });
};
