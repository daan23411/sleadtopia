const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    return message.channel.send("Hallo!");

}

module.exports.help = {
    name: "hallo",
    alaises: ["hi"],
    category: "General",
    description: "Stuurt een leuk bericht terug",
    usage: "[command | alais]",
}