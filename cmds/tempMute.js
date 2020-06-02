const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Bot heeft geen perms");

    var muteUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!muteUser) return message.reply("Kan de gebruiker niet vinden.");

    if (muteUser.hasPermission("MANAGE_GUILD")) return message.reply("Ben je gek? Ik kan niet een Admin muten!");

    var muteRole = message.guild.roles.cache.get('717370958704541746');
    if(!muteRole) return message.reply("Geen rol 'Muted' gevonden");

    var muteTime = args[1];

    if(!muteTime) return message.reply("Geen tijd opgegeven! in uren, minuten of seconden");

    await(muteUser.roles.add(muteRole.id));
    message.channel.send(`${muteUser} is gemute voor ${muteTime}`);

    setTimeout(() => {
        
        muteUser.roles.remove(muteRole.id)
        
        message.channel.send(`${muteUser} is geunmute.`)

    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}