exports.run = function(client, message, args) {
if (message.channel.type === "dm") return;   
message.channel.send(`**${message.author.username} **` + "Your ID is: " + `__${message.author.id}__`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['id', 'i','d'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'id',
    description: 'Using this command you can gain your user id.',
    usage: 'id'
  };