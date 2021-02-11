const { MessageEmbed } = require('discord.js');
const notifyAdmin = require("./notifyAdminCustom");

module.exports = async (channel, order, client, user) => {

    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription("TALON has been notified of your order, he will be with you ASAP. Please sit tight, Thank you.")
                        .addField("Order", order);
    
    channel.send(embed);

    notifyAdmin(user, channel, order, client);
}