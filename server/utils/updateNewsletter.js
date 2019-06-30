const app = require('../server');

function updateNewsletter(oldPost, newPost) {
    console.log('----------------------')
    console.log('update Newsletter oldPost: ',oldPost)
    console.log('update Newsletter newPost: ',newPost)
    let newLines = [];
    let oldLines = oldPost.lines;
    console.log('oldLines: ',oldLines )
    newLines = oldLines.push(newPost)
    console.log('newLines: ',newLines)
    const { News } = app.models;
    let updatedPost =  {
        "date": oldPost.date,
        "lines": newLines,
        "id": oldPost.id
    }
    console.log('updatedPost: ',updatedPost)
   return News.update(updatedPost)
}

module.exports = { updateNewsletter };