const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Please Write a Game Name on Steam. Example: `steam portal 2`')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "slovenia", "sl").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`ID of the game`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Genres', results.genres)
    .addField('Price', `Initial Price **${results.priceData.initialPrice}** \n With discount **${results.priceData.finalPrice}**`, true)
    .addField('Platform', results.otherData.platforms, true)
    .addField('Metacritics Score', results.otherData.metacriticScore, true)
    .addField('Features', results.otherData.features, true)
    .addField('Developer', results.otherData.developer, true)
    .addField('Publisher', results.otherData.publisher)
  .setColor("#36393F")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Error For `' + game + '` game specified was not found')
    })
})
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['steam-store','steamstore'],
  permLevel: 0
};

exports.help = {
  name: 'steam',
  description: 'This is basicly a steam store on discord :D Its simple as that...',
  usage: 'steam'
};