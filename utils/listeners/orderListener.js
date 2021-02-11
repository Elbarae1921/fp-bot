const fs = require("fs");
const initTicket = require("../initTicket");

const CATEGORY_ID = "665594132969947146";
const ORDERS_CHANNEL_ID = "764778813678682152";
const ORDER_MESSAGE_ID = "764795915533025320";

module.exports = (user, guild, client) => {
    fs.readFile("config.json", async (err, data) => {
        if(err) return console.error(err);
        const json = JSON.parse(data);
        const len = json.tickets.toString().length;
        const rep = 4 - len;
        const name = `ticket-${'0'.repeat(rep)}${json.tickets}`;

        const category = guild.channels.cache.get(CATEGORY_ID);

        const channel = await guild.channels.create(name, { 
            type: 'text',
            parent: category, 
            permissionOverwrites: [
                {
                    id: guild.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                }
            ] 
        });

        fs.writeFile("config.json", JSON.stringify({...json, tickets: json.tickets+1 }), (err) => {
            if(err) console.error("Could not increment the tickets count", err);
        });

        const id = setTimeout(() => {
            channel.delete();
        }, 1000 * 60 * 60 * 48); //48 hours

        const listener = (message) => {
            if(message.channel.id === channel.id) {
                clearTimeout(id);
                client.removeListener("message", listener);
            }
        }

        client.on('message', listener);

        initTicket(channel, user, client);
    })
}