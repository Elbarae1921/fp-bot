const { MessageEmbed } = require("discord.js");

module.exports = async (message, client) => {
    const listener = (reaction, user) => {
        if(reaction.message.id !== message.id) return;
        if(user.bot) return;

        const embed = new MessageEmbed()
                        .setColor("#FF0000")
                        .setDescription("This ticket will be deleted instantly");
        
        message.channel.send(embed);

        setTimeout(() => {
            message.channel.delete();
        }, 3000);

        client.removeListener("messageReactionAdd", listener);
    }
    client.on("messageReactionAdd", listener);
}