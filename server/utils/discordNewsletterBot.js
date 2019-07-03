// permission URL https://discordapp.com/oauth2/authorize?&client_id=492835843271032842&scope=bot&permissions=268561430
// the token of your bot - https://discordapp.com/developers/applications/me
require('dotenv').config();
const Discord = require('discord.js');
const app = require('../server')
const moment = require('moment')
const { submitNewsletter } = require('../utils/submitNewsletter')
const { updateNewsletter } = require('../utils/updateNewsletter')
class newsBot {
    constructor() {
        const token = process.env.NEWSLETTER_BOT_TOKEN;
        const channelID = process.env.NEWS_CHANNEL_ID;
        this.bot = new Discord.Client({ show: false });
        this.bot.login(token);

        this.bot.on('ready', () => {
            console.log('I am ready!');
            console.log(String(1234));
        });
        this.bot.on('message', message => {
            if (message.channel.id !== channelID) return;
            var content = message.content;
            var lines = content.split('\n');

            // Due to discords character limit, a single news post in discord usually takes several posts.
            // I wanted to add this feature where if the admin staff were continuing a newsletter post with a second
            // message they would simply type ** as the first two characters in the new message. That way the code would know 
            // to fetch the last created newsletter post and push the new message content onto the old newsletter content instead
            // of creating a whole new newsletter post. However, I was running into difficulties when trying to .push() 
            // because loopback was adding this List to my arrays which was preventing me from pushing the two arrays.

            // if (lines[0].includes('**')) {
            //     const { News } = app.models;
            //     var p = News.findOne({
            //         order: 'date DESC',
            //         limit: 1
            //     })
            //         .then(response => {
            //             let oldPost = response
            //             console.log('oldPost: ', oldPost)
            //             return response
            //         })
            //         .then(response => updateNewsletter(response, lines))
            // } else {
                const newsletter = {
                    date: moment().format('x'),
                    lines: lines
                }
                submitNewsletter(newsletter)
           // }
        })
        this.bot.on("error", (e) => console.error(e));
    }
}

module.exports = new newsBot();
