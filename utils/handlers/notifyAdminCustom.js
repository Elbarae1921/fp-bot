const { MessageEmbed } = require("discord.js");

const NOTIF_CHANNEL_ID = "764861863825113118";
const GUILD_ID = "665564615945486366";

module.exports = async (user, ticket, order, client, replacement = false) => {
    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription("hey <@184761349132386306>, a custom order came in")
                        .addFields(
                            {name: "Order", value: order},
                            {name: "User", value: `<@${user.id}>`, inline: true},
                            {name: "Ticket", value: `<#${ticket.id}>`, inline: true}
                        );
    const channel = client.guilds.cache.get(GUILD_ID).channels.cache.get(NOTIF_CHANNEL_ID);
    channel.send(embed);
}