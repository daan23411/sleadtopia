const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "713337970828115969";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet! Vraag een admin om je ticket te closen!");

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {

        message.channel.send("Doe dit in een ticket kanaal!");

    }

    var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Ticket " + message.channel.name)
        .setColor("AQUA")
        .setDescription("Het ticket is gemarkeerd als **compleet**. Als je nog vragen hebt of niet tevreden bent twijfel dan niet en maak nog een ticket aan!")
        .setFooter("© daan2341, 2020 - 2021");

    var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
    if (!ticketChannel) return message.reply("Kanaal bestaat niet!");

    var user = client.users.cache.find(a => a.username === username);
    if (user) user.send(embedCreateTicket)

    message.author.send(embedCreateTicket);

}

module.exports.help = {
    name: "close"
}