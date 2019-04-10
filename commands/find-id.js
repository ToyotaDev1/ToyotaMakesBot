exports.run = function(client, message, args) {
if (message.channel.type === "dm") return;
let member = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));

message.channel.send(`**${member} **` + "His ID is: " + `__${member.id}__`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['find-id', 'id-find'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'find-id',
    description: 'Using this command you are able to get other discord users ids.',
    usage: 'find-id'
  };