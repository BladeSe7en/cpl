const app = require('../server');

function submitNewsletter(newsletter) {
    console.log('submit Newsletter: ',newsletter)
    const { News } = app.models;
    let post = {
        "date": newsletter.date,
        "lines": newsletter.lines
    }
   return News.create(post)
}

module.exports = { submitNewsletter };
