require("dotenv").config();

//logging Kahta's TOKEN to CLI
//console.log(process.env.KAHTA_BOT_DISCORD_TOKEN);

//Importing Discord.js
const { Client } = require('discord.js');

//instance of Discord.js
const client = new Client();

//write to CLI when Kahta logs in
client.on('ready', () => {
    console.log('Kahta is now LIVE');
})

client.on('message', (message) => {
    if(message.content === 'say hi, Kahta'){
        message.reply(
            {embed: {
                color: 3447003,
                author: {
                  name: "Kahta",
                  icon_url: client.user.avatarURL()
                },
                title: "Ahla b rojla w 3asba leli may9oulech 3assbaaa",
                description: "3assbou ya rjeeeeeeeeel",           
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL(),
                  text: "© ESPRIT MEMES | Kahta BOT"
                }
              }
            }
        );
    }
})



//connecting to Discord gateway
client.login(process.env.KAHTA_BOT_DISCORD_TOKEN);