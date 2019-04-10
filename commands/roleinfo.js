const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  var errorEmbed = new Discord.RichEmbed()
  .setColor("#36393F")
  .setDescription("❌Please Write a Valid Role Name **Example:**`roleinfo member`");
  if(!role) return message.channel.send(errorEmbed);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('✏ Role Name', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 Users with Role', role.members.size, true)
  .addField('💙 Color', role.hexColor, true)
  .addField('📣 Labeling?', role.mentionable ? '\nYes' : 'No', true)
  .addField('📅 Created Time', moment(role.createdAt).format("LL"), true)
  .setFooter("", temps, true);
  message.channel.send(roleinfoEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ROLEINFO', 'about-role', 'role-information'],
  permLevel: 0
};

exports.help = {
  name: 'roleinfo',
  description: 'This command gives information about the role.',
  usage: 'roleinfo <role name>'
};
