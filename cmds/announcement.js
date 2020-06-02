const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry je hebt niet de juiste permissie.");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("FOUT! NIET ALLE ARGUMENTEN MEEGEGEVEN!")
            .setColor("#00fff2")
            .setDescription(`Maak een announcement door gebruik te maken van: \n !announcement titel ${seperator} bericht ${seperator} kleur (hex code) ${seperator} kanaal`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] == undefined) argsList[2] == "#eeeeee"
    if (argsList[3] == undefined) argsList[3] == "#algemeen"

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen bericht geplaatst",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle("Announcement!")
        .setColor(options.kleur)
        .setDescription(`Bericht van ${message.author} \n\n ${options.titel} \n\n ${options.bericht}`)
        .setTimestamp();

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if(!channel) return message.reply("Dit kanaal bestaat niet!");

        channel.send(announceEmbed);

}

module.exports.help = {
    name: "announcement"
}