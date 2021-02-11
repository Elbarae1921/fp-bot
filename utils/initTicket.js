const { MessageEmbed } = require("discord.js");
const initOffer = require("./initOffer");
const listenToClose = require("./listeners/listenToClose");

module.exports = async (channel, user, client) => {
    const embed = new MessageEmbed()
                                .setDescription("To close this ticket react with 🔒")
                                .setFooter("ticket will be closed automatically if inactive for 48h", client.user.avatarURL())
                                .setColor("#FFFFFF")
    const message = await channel.send(`<@${user.id}> Welcome`, embed);
    message.react("🔒");

    initOffer(channel, client);
    listenToClose(message, client);
}