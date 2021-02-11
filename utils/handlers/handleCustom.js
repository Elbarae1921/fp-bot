const { MessageEmbed } = require('discord.js');

module.exports = async (channel) => {

    const embed = new MessageEmbed()
                        .setColor("#FFFFFF")
                        .setDescription(`Custom Order`)
                        .addField("To make a custom order please use the `!other` command", "```\n!other <Your Custom Order>\n```");

    channel.send(embed);
}