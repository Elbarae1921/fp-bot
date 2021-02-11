const handleOrder = require("../utils/handlers/handleCustomOrder");

module.exports = {
	name: 'other',
	description: 'Request a custom order.',
    guildOnly: true,
	execute(message, args, client) {
        if(!message.channel.name.includes('ticket')) return;
        
        if(!args || args.length == 0) return message.reply("You need to specify an order");

        handleOrder(message.channel, args.join(" "), client, message.author);
	},
};