require("dotenv").config()
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const orderListener = require('./utils/listeners/orderListener');

const ORDER_MESSAGE_ID = "764795915533025320";

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    
    if (command.guildOnly && message.channel.type === 'dm') return;
    
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

    try {
		command.execute(message, args, client);
    }
    catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on('raw', packet => {
    // runs whenever a new reaction is added to a new message
    // check if the message is the one we want and if the user is not a bot
    if (packet.t === "MESSAGE_REACTION_ADD" && packet.d.message_id === ORDER_MESSAGE_ID) {
        // const user = client.users.get(packet.d.user_id)
        const guild = client.guilds.cache.get(packet.d.guild_id);
        const user = guild.members.cache.get(packet.d.user_id);
        if(user.bot) return;
        orderListener(user, guild, client);
    }
});

client.login(process.env.TOKEN);