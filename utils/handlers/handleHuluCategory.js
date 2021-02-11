const { MessageEmbed } = require('discord.js');
const listen = require("../listeners/listenToHuluCategory");

module.exports = async (channel, client) => {

    const prices = [3, 4, 5, 10, 14];

    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription(`Please choose your Hulu offer, the following offers all have a lifetime warranty`)
                        .addField("Offers", `:one: - Hulu no ads - \`$3\` \n\n:two: - Hulu no ads + HBO - \`$4\` \n\n:three: - Hulu no ads + Live TV - \`$5\` \n\n:four: - Hulu no ads + all addons - \`$10\` \n\n:five: - Hulu no ads + Live TV + all addons - \`$14\``);
    
    const sentMessage = await channel.send(embed);

    sentMessage.react("1️⃣");
    sentMessage.react("2️⃣");
    sentMessage.react("3️⃣");
    sentMessage.react("4️⃣");
    sentMessage.react("5️⃣");

    listen(sentMessage, client, prices);
}