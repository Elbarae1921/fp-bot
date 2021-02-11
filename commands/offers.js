const { MessageEmbed } = require('discord.js');
const listenToOffer = require("../utils/listeners/listenToOffer");

module.exports = {
	name: 'offers',
	description: 'List offers.',
	guildOnly: true,
	async execute(message, _, client) {
        const embed = new MessageEmbed()
                            .setColor("#FFFFFF")
                            .setDescription("Welcome to TALON's Marketplace, please check the box of the product you want to buy")
                            .addField("Categories", ":one: - Netflix \n:two: - Disney+ \n:three: - Spotify \n:four: - Hulu \n:five: - Pornhub \n:six: - Request Replacement \n:seven: - Other");
        const sentMessage = await message.channel.send(embed);

        sentMessage.react("1️⃣");
        sentMessage.react("2️⃣");
        sentMessage.react("3️⃣");
        sentMessage.react("4️⃣");
        sentMessage.react("5️⃣");
        sentMessage.react("6️⃣");
        sentMessage.react("7️⃣");

        listenToOffer(sentMessage, client);
	}
};