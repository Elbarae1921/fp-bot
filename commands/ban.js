module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
	guildOnly: true,
	execute(message, args) {

		if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the necessary perermissions to ban members");
        
        let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        
        if (!user) return message.channel.send("Invalid user");
        if (user.hasPermission("BAN_MEMBERS")) return message.reply("I can't ban this user");

        user.ban();

        message.channel.send(`User ${user.id} was banned`);
	},
};