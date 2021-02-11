const { MessageEmbed } = require("discord.js");
const listenToOffer = require("./listeners/listenToOffer");

module.exports = async (channel, client) => {
    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription("Please choose the product you want to buy")
                        .addField("Categories", ":one: - Netflix \n:two: - Disney+ \n:three: - Spotify \n:four: - Hulu \n:five: - Pornhub \n:six: - Request Replacement \n:seven: - Other");
    const sentMessage = await channel.send(embed);

    sentMessage.react("1️⃣");
    sentMessage.react("2️⃣");
    sentMessage.react("3️⃣");
    sentMessage.react("4️⃣");
    sentMessage.react("5️⃣");
    sentMessage.react("6️⃣");
    sentMessage.react("7️⃣");

    listenToOffer(sentMessage, client);
}