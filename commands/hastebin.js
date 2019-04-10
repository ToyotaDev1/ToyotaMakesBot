const hastebin = require('hastebin-gen-2');
const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
  hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)

      .setURL(hastLink)
      .addField('Link: ', `${hastLink}`)
       message.channel.send({embed: hastEmb})
  }).catch(console.error);  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['haste', 'bin'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hastebin',
    description: 'You can generate hastebin page :)',
    usage: 'hastebin [type anything that you want to be in your hastebin here it can be up to 2000 words long(discord regulations) ]'
  };