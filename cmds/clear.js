const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //clear aantal

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt niet de juiste permissie (MANAGE_MESSAGES)");

    if (!args[0]) return message.reply("Geeft een aantal op");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0] + 1);

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Ben je gek? Ik kan toch geen 0 berichten verwijderen!?").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Yes Gelukt! Ik heb 1 bericht verwijderd!").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Yes Gelukt! Ik heb ${args[0]} berichten verwijderd!`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })

    } else {
        return message.reply("Geef een geldig getal op!");
    }

}

module.exports.help = {
    name: "clear"
}