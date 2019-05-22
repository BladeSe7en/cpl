var es = require('event-stream');
module.exports = function (app) {
    console.log('realtime boot script for thread')
    var Thread = app.models.Thread;
    Thread.createChangeStream(function (err, changes) {
        changes.pipe(es.stringify()).pipe(process.stdout);
    });
}