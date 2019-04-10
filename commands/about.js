const Discord = require("discord.js");

exports.run = (message) => {
try {
let embed = new Discord.RichEmbed()
.setTitle("Welcome to Akelli world !")
.setDescription("Akelli world, ToyotaBot, Toyota Dev and ToyotaDev Discord server.\nThey are all trademarks owned by Akelli Company\nCoded and produced by <@262636562355978240>")
.setThumbnail("https://www.westcoasttoyotalb.com/wp-content/themes/DealerInspireDealerTheme/images/manufacturer-logo.jpg")
.setImage("https://thumbs.gfycat.com/EnchantedRelievedHyracotherium-size_restricted.gif")
.setTimestamp()
.setFooter("Copyright © Akelli Company 2019 All right reserved.")
message.channel.send(embed);
} catch (err) {console.log("Error with about - For More Info See Below\n"+ err)}

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ABOUT', 'bout'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'about',
    description: 'Find out information about this bot.',
    usage: 'about'
  };