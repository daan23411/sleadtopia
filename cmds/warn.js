const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    // !warn spelernaam reden

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Bot heeft geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    var reason = args.slice(1).join(" ");

    if (warnUser.hasPermission("MANAGE_GUILD")) return message.reply("Ben je gek? Ik kan niet een Admin warnen!");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });
    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(warnUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL(), "© daan2341, 2020-2021")
        .setTimestamp()
        .setDescription(`** Gewarnd:** ${warnUser} (${warnUser.id})
            **Gewarnd door:** ${message.author}
            **Redenen: ** ${reason}`)
        .addField("Aantal warns:", warns[warnUser.id].warns);

        var channel = message.guild.channels.cache.get("714401632481443842");

        if(!channel) return;

        channel.send(embed);
} 

module.exports.help = {
    name: "warn"
}