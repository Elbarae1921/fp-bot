require("dotenv").config()
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();

const GUILD_ID = "665564615945486366";
const CHANNEL_ID = "764778813678682152";

client.once('ready', async () => {
    const channel = client.guilds.cache.get(GUILD_ID).channels.cache.get(CHANNEL_ID);
    const embed = new Discord.MessageEmbed()
                                .addField("Make an ORDER", "To create a ticket react with :ticket:")
                                .setFooter("ticket will be deleted if inactive for 48h", client.user.avatarURL())
                                .setColor("#FFFFFF")
    const message = await channel.send(embed);
    message.react("🎫");
});

client.login(process.env.TOKEN);