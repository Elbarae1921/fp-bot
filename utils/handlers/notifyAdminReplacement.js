const { MessageEmbed } = require("discord.js");

const NOTIF_CHANNEL_ID = "764872154063175680";
const GUILD_ID = "665564615945486366";

module.exports = async (user, ticket, client) => {
    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription("hey <@&757699245074546779>, someone requests a replacement")
                        .addFields(
                            {name: "User", value: `<@${user.id}>`, inline: true},
                            {name: "Ticket", value: `<#${ticket.id}>`, inline: true}
                        );
    const channel = client.guilds.cache.get(GUILD_ID).channels.cache.get(NOTIF_CHANNEL_ID);
    channel.send(embed);
}