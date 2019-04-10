const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let string = '';
    client.guilds.forEach(guild => {
        string += '**Server Name:**  ' + guild.name + '\n' + '**Server ID:**  `  ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Bot is On ", string)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['my-servers', 'servers'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'servers',
    description: 'See which and on how many servers i am on !',
    usage: 'servers'
  };