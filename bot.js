const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

var prefix = '-';
var perm = 'Staff'

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if(msg.startsWith(prefix + 'KICK') || msg.startsWith(prefix + 'EXPULSAR')){

        if(message.member.roles.find('name', perm)){

            if(message.content.slice(prefix.length + 6)){

                const user = message.mentions.users.first();
                if(user){

                    const membro = message.guild.member(user);
                    if(membro){

                        let args1 = args.slice(1).join(" ");

                        if(args1){

                            const embed = new Discord.RichEmbed()
                                .setTitle(':warning: | Expulsar')
                                .addField('Membro: ', `${membro}`)
                                .setColor('d33030')
                                .addField('Motivo: ', `${args1}`)
                                .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
                                .setThumbnail(`${membro.user.avatarURL}`)

                            message.delete();

                            message.channel.send(embed).then(msg => {

                                msg.delete(10000);

                                if(message.member.roles.find('name', perm)){

                                    msg.react('✅').then( r =>{

                                        const aceitar = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                                        const aceita = msg.createReactionCollector(aceitar, { time: 10000 });

                                        aceita.on('collect', r =>{

                                            membro.kick(args1);
                                            const embed1 = new Discord.RichEmbed()
                                                .setAuthor('Expulsão', `${membro.user.avatarURL}`)
                                                .addField('Membro:', `${membro}`)
                                                .addField('Motivo:', `${args1}`)
                                                .setColor('3dd230')
                                                .setFooter(`Author: ${message.author.username}`, `${message.author.avatarURL}`);

                                            bot.channels.get('437472070520012810').send(embed1)
                                            message.channel.send('✅ | O Membro ' + membro + ' foi expulso de nosso discord !')
                                                .then(msg => {

                                                    msg.delete(10000);

                                                });

                                            msg.delete(embed);

                                        })

                                    })

                                    msg.react('❌').then( r =>{

                                        const negar = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                                        const negado = msg.createReactionCollector(negar, { time: 10000 });

                                        negado.on('collect', r => {

                                            msg.delete(embed);
                                            message.channel.send('❌ | A Expulção do membro ' + membro + ' foi cancelada !')
                                                .then(msg => {

                                                    msg.delete(10000);

                                                });

                                        });

                                    });

                                }else{

                                    message.reply('Você não pode usar esse comando !')
                                        .then(msg => {

                                            msg.delete(5000);

                                        })

                                    message.delete();

                                }

                            });

                        }else{

                            message.reply('Comando não foi usado corretamente !')
                                .then(msg => {

                                    msg.delete(10000);

                                });

                            message.delete();

                        }

                    }else{

                        message.reply('O Membro não foi mencionado !')
                            .then(msg => {

                                msg.delete(10000);

                            });

                        message.delete();

                    }

                }else{

                    message.reply('Esse membro não existe !')
                        .then(msg => {

                            msg.delete(10000);

                        });

                    message.delete();

                }

            }else{

                message.reply('Você não usou o comando corretamente.')
                    .then(msg => {

                        msg.delete(10000);

                    });

                message.delete();

            }

        }else{

            message.reply('Você não pode usar esse comando !')
                .then(msg => {

                    msg.delete(10000);

                });

            message.delete();

        }

    }

    if(msg.startsWith(prefix + 'BAN') || msg.startsWith(prefix + 'PUNIR') || msg.startsWith(prefix + 'BANIR')){
        
        bot.user.setGame('Use h!help', 'https://twitch.tv/zgholsk');

        if(message.member.roles.find('name', perm)){

            if(message.content.slice(prefix.length + 6)){

                const user = message.mentions.users.first();
                if(user){

                    const membro = message.guild.member(user);
                    if(membro){

                        let args1 = args.slice(1).join(" ");

                        if(args1){

                            const embed = new Discord.RichEmbed()
                                .setTitle(':warning: | Punimento')
                                .addField('Membro: ', `${membro}`)
                                .addField('Motivo: ', `${args1}`)
                                .setColor('d33030')
                                .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
                                .setThumbnail(`${membro.user.avatarURL}`)

                            message.delete();

                            message.channel.send(embed).then(msg => {

                                msg.delete(10000);

                                if(message.member.roles.find('name', perm)){

                                    msg.react('✅').then( r =>{

                                        const aceitar = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                                        const aceita = msg.createReactionCollector(aceitar, { time: 10000 });

                                        aceita.on('collect', r =>{

                                            membro.ban(args1);

                                            const embed1 = new Discord.RichEmbed()
                                                .setAuthor('Banimento', `${membro.user.avatarURL}`)
                                                .addField('Membro:', `${membro}`)
                                                .addField('Motivo:', `${args1}`)
                                                .setColor('3dd230')
                                                .setFooter(`Author: ${message.author.username}`, `${message.author.avatarURL}`);

                                            bot.channels.get('437472070520012810').send(embed1)
                                            message.channel.send('✅ | O Membro ' + membro + ' foi banido de nosso discord !')
                                                .then(msg => {

                                                    msg.delete(10000);

                                                });

                                            msg.delete(embed);

                                        })

                                    })

                                    msg.react('❌').then( r =>{

                                        const negar = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                                        const negado = msg.createReactionCollector(negar, { time: 10000 });

                                        negado.on('collect', r => {

                                            msg.delete(embed);
                                            message.channel.send('❌ | O Banimento do membro ' + membro + ' foi cancelado !')
                                                .then(msg => {

                                                    msg.delete(10000);

                                                });

                                        });

                                    });

                                }else{

                                    message.reply('Você não pode usar esse comando !')
                                        .then(msg => {

                                            msg.delete(5000);

                                        })

                                    message.delete();

                                }

                            });

                        }else{

                            message.reply('Comando não foi usado corretamente !')
                                .then(msg => {

                                    msg.delete(10000);

                                });

                            message.delete();

                        }

                    }else{

                        message.reply('O membro não foi encontrado !')
                            .then(msg => {

                                msg.delete(10000);
            
                            });

                        message.delete();

                    }

                }else{

                    message.reply('Esse membro não existe !')
                        .then(msg => {

                            msg.delete(10000);
        
                        });

                    message.delete();

                }

            }

        }else{

            message.reply('Você não pode usar esse comando !')
                .then(msg => {

                    msg.delete(10000);

                });

            message.delete();

        }

    }

});

bot.on('ready', () => {

    console.log('Online');

    bot.channels.get('437676447419858981').send('Bot iniciado !')
        .then(msg => {

            msg.delete(5000);

        })

    bot.user.setGame('Use h!help', 'https://hyzenmc.com');

})
