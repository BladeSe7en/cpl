// const axios         = require('axios');
// const Discord       = require('discord.js');
// const Discordie     = require("discordie");
// const dotenv        = require('dotenv').config();
// const express       = require('express');
// const app           = express();
// const fs            = require('fs');
// const http          = require('http').Server(app);
// const morgan        = require('morgan');
// const path          = require('path');
// const io            = require('socket.io')(http);
// const steam         = require('steam-login');
// const bot           = new Discord.Client();
// const client        = new Discordie();
// const guild         = 291751672106188800;
// //const channel     = '291751672106188800';
// let steamUser;


// app.use(morgan('dev'));

// app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));
// app.use(steam.middleware({
//     realm: 'http://localhost:3000/',
//     verify: 'https://bpc-cpl-wesite-chat-app.herokuapp.com//verify',
//     apiKey: `${process.env.STEAM_API_KEY}`
// }
// ));
// app.use(express.static('dist'));
// app.use(express.static('public'));

// var messages = undefined;
// axios.get(`${process.env.DISCORD_GET_MSG}`)
//     .then((discordResponse) => {
//         console.log('this is req: ' + discordResponse);
//         messages = discordResponse;
//     })

//     .catch((err) => {
//         console.log(err);
//         res.send(err);
//     }); 
// function getMessages(req, res) {
//     axios({
//         url: `${process.env.DISCORD_GET_MSG_URL}`,
//         method: 'get',
//         headers: {
//             Authorizaton: Bot`${process.env.DISCORD_API_KEY}`,
//         }
//             .then((messages) => {
//                 console.log('this is msg: ' + discordMessage);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 res.send(err);
//             })
//     });
// }
// function postMessageToDiscord(val) {

//     const message = steamUser.personaname + ': ' + val;
    
//     var discordUrl = `${process.env.DISCORD_WEB_HOOK}`;
//     axios.post(discordUrl, { content: message })
//         .then(response => {
//             console.log(response.data)
//         })
//         .catch(console.log);
  
// }

// io.on('connection', function (socket) {
//     console.log('a user connected');
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
//     socket.on('submit', function (val) {

//     });
// });
// module.exports = http;
