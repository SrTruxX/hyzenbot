const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    client.user.setGame('Viado')
});

client.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if(msg.startsWith(prefix + 'KICK') || msg.startsWith(prefix + 'EXPULSAR')){

        message.reply('Viado');

    }

});
