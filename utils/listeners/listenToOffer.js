const category = require("../handlers/handleNormalCategory");
const categoryHulu = require("../handlers/handleHuluCategory");
const categoryCustom = require("../handlers/handleCustom");
const order = require("../handlers/handleOrder");
const replacement = require("../handlers/handleReplacement");

module.exports = async (message, client) => {
    const listener = (reaction, user) => {
        if(reaction.message.id !== message.id) return;
        if(user.bot) return;
        
        switch(reaction.emoji.name) {
            case "1️⃣": 
                category(reaction.message.channel, client, "Netflix");
                client.removeListener("messageReactionAdd", listener);
                break;
            case "2️⃣":
                category(reaction.message.channel, client, "Disney");
                client.removeListener("messageReactionAdd", listener);
                break;
            case "3️⃣":
                category(reaction.message.channel, client, "Spotify");
                client.removeListener("messageReactionAdd", listener);
                break;
            case "4️⃣":
                categoryHulu(reaction.message.channel, client);
                client.removeListener("messageReactionAdd", listener);
                break;
            case "5️⃣":
                order(reaction.message.channel, "Lifetime warranty", "Pornhub", "$4", client, user)
                client.removeListener("messageReactionAdd", listener);
                break;
            case "6️⃣":
                replacement(reaction.message.channel, client, user);
                client.removeListener("messageReactionAdd", listener);
                break;
            case "7️⃣":
                categoryCustom(reaction.message.channel);
                client.removeListener("messageReactionAdd", listener);
                break;            
            default: break;
        }
    }
    client.on("messageReactionAdd", listener);
}