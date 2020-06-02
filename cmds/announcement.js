const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry je hebt niet de juiste permissie.");

    var seperator = "|";

    if(args[0] == null){

        var embed = new discord.MessageEmbed()
        .setTitle("FOUT! NIET ALLE ARGUMENTEN MEEGEGEVEN!")
        .setColor("#00fff2")
        .setDescription(`Maak een announcement door gebruik te maken van: \n !announcement titel ${seperator} bericht ${seperator} kleur (hex code) ${seperator} kanaal`);

        return message.reply(embed);

    }

}

module.exports.help = {
    name: "announcement"
}