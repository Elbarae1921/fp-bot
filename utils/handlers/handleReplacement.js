const { MessageEmbed } = require('discord.js');
const notifyAdmin = require("./notifyAdminReplacement");

module.exports = async (channel, client, user) => {

    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription("Moderators have been notified of your request, someone will be with you ASAP. Please sit tight, Thank you.")
                        .addField("Order", "Replacement request");
    
    channel.send(embed);

    notifyAdmin(user, channel, client);
}