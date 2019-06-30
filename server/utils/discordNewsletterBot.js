// permission URL https://discordapp.com/oauth2/authorize?&client_id=568139051538841603&scope=bot&permissions=268561430
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
            console.log('message.channel: ', message.channel.id)

            if (message.channel.id !== channelID) return;
            console.log('i made it past the if')

            var content = message.content;
            var lines = content.split('\n');
            if (lines[0].includes('**')) {
                const { News } = app.models;
                var p = News.findOne({
                    order: 'date DESC',
                    limit: 1
                })
                    .then(response => {
                        let oldPost = response
                        console.log('oldPost: ', oldPost)
                        return response
                    })
                    .then(response => updateNewsletter(response, lines))
            } else {
                const newsletter = {
                    date: moment().format('x'),
                    lines: lines
                }
                submitNewsletter(newsletter)
            }
        })
    }
}

module.exports = new newsBot();

