var es = require('event-stream');
module.exports = function(app) {
    console.log('realtime boot script')
  var BlogPost = app.models.BlogPost;
  BlogPost.createChangeStream(function(err, changes) {
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
}