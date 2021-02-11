const order = require("../handlers/handleOrder");

module.exports = async (message, client, prices) => {
    const listener = (reaction, user) => {
        if(reaction.message.id !== message.id) return;
        if(user.bot) return;
        
        switch(reaction.emoji.name) {
            case "1️⃣": 
                order(message.channel, "Hulu no ads", "Hulu", prices[0], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;
            case "2️⃣":
                order(message.channel, "Hulu no ads + HBO", "Hulu", prices[1], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;
            case "3️⃣":
                order(message.channel, "Hulu no ads + Live TV", "Hulu", prices[2], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;   
            case "4️⃣":
                order(message.channel, "Hulu no ads + all addons", "Hulu", prices[3], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;
            case "5️⃣":
                order(message.channel, "Hulu no ads + Live TV + all addons", "Hulu", prices[4], client, user);
                client.removeListener("messageReactionAdd", listener);
                break;           
            default: 
                break;
        }
    }
    client.on("messageReactionAdd", listener);
}