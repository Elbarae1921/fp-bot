const { MessageEmbed } = require('discord.js');
const notifyAdmin = require("./notifyAdmin");

module.exports = async (channel, account, type, price, client, user) => {

    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription("TALON has been notified of your order, he will be with you ASAP. Please sit tight, Thank you.")
                        .addField("Order", `${account} ${type} account - \`$${price}\``);
    
    channel.send(embed);

    notifyAdmin(user, channel, account, type, price, client);
}