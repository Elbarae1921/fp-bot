const { MessageEmbed } = require('discord.js');
const listen = require("../listeners/listenToNormalCategory");

module.exports = async (channel, client, type) => {

    const prices = new Map([["Netflix", [8, 12, 15]], ["Spotify", [7, 7, 10]], ["Disney", [4, 6, 8]]])

    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription(`Please choose your ${type} offer`)
                        .addField("Offers", `:one: - 6 months warranty - \`$${prices.get(type)[0]}\` \n\n:two: - 12 months warranty - \`$${prices.get(type)[1]}\` \n\n:three: - Lifetime warranty - \`$${prices.get(type)[2]}\``);
    
    const sentMessage = await channel.send(embed);

    sentMessage.react("1️⃣");
    sentMessage.react("2️⃣");
    sentMessage.react("3️⃣");

    listen(sentMessage, client, type, prices.get(type));
}