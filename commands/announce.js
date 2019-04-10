//This command requires 2 packages
const send = require("quick.hook"); // Sending webhooks
const Discord = require('discord.js'); // Creating embeds

//You can form your command handler here
exports.run = (message, args) => {

	     //First. we need to define a character you want to split the message arguments by 
			 let split = '%%'; // This can be set to anything
			 
			 //Second, we want to display a help command if they didn't specify anything to announce
			 if(!args[0]){

				//Form Help Embed
				const embed = new Discord.MessageEmbed()
			 .setColor(0x77B3D5)
			 .setTitle('Information')
			 .setDescription(`**Usage: \`\`\`announce embedTitle ${split} embedMsg ${split} msgName ${split} msgIcon $[split] embedColor\`\`\`**`)
			 .setTimestamp();
			 
			 // Now, return and send help message
			 return send(message.channel, embed, {// This is the quick.hook module, you can find more info on the NPM page
				name: 'Announce Command', // This is the name of the message author
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/clipboard-512.png' // This is the icon of message
			 })

			 };

			 // Now, we can start the command

			 //Format Arguments
			 args = args.join(' ').split(split); // Join the message by spaces, then split it by what you defined

			 // Go through each item in args and trim the sides
			 for (var i = 0; i < args.length; i++) args[i] =args[i].trim();

			 // Format the COLOR if detected
			 if (args[4]) args[4] = parseInt(`0x${args[4]}`); // This turns the specified HEX color into a proper format

			 // Defined Options - You can set defaults here
			 let options = {
				 title: args[0] || 'Announcement', // If args[0] isn't defined, it will set options.title to 'Announcement' instead
				 message: args[1] || undefined, // If args[1] isn't defined, it will set options.message to undefined instead
				 name: args[2] || 'Toyota Development', // If args[2] isn't defined, it will set options.name to 'Toyota Development', you can change this to anything
				 icon: args[3] || 'https://i.imgur.com/X9eAmHm.png', // If args[3] isn't defined it will set options.icon to a picture of settings, you can change this
				 embedColor: args[4] || 0xffffff //If args[4] isn't defined, it will set options.embedColor to white, you can change this


			 }

       //Form Embed
			 const embed = new Discord.MessageEmbed()
			 .setColor(options.embedColor)
			 .setTitle(options.title);

			 // Options.message may be undefined, so only set it 
			 if (options.message) embed.setDescirption(options.message);
			 
			 // Finally, send the webhook to the channel
			 SVGAnimatedBoolean(message.channel, embed, { // You can view more info on the quick.hook module in the description / NPM page
				 name: options.name,
				 icon: options.icon
			 })
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['shotout', 'ANNOUNCE'],
	permLevel: 3
};

exports.help = {
	name: 'announce',
	description: 'Using this command you are able to announce anything you wish in a certain channel',
	usage: 'announce [type in the message that you wish to be announced]'
};