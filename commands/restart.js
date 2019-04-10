const settings = require('../settings.json');
exports.run = async function(client, message, args) {
try {
client.destroy();
client.login(settings.token);
message.channel.send(":gear: Bot restart has been done");
} catch (err) {console.log("Error with restart - Please see below\n"+err)}

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['RESTART', 'raestart'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'restart',
    description: 'Restart whole bot instead of just a single command/file.',
    usage: 'restart'
  };