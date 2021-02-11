const order = require("../handlers/handleOrder");

module.exports = async (message, client, type, prices) => {
    const listener = (reaction, user) => {
        if(reaction.message.id !== message.id) return;
        if(user.bot) return;
        
        switch(reaction.emoji.name) {
            case "1️⃣": 
                order(message.channel, "6 months warranty", type, prices[0], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;
            case "2️⃣":
                order(message.channel, "12 months warranty", type, prices[1], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;
            case "3️⃣":
                order(message.channel, "Lifetime warranty", type, prices[2], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;          
            default: 
                break;
        }
    }
    client.on("messageReactionAdd", listener);
}