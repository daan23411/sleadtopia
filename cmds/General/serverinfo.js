const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setAuthor(message.guild.name, "https://cdn.discordapp.com/attachments/692748361274490892/713009049100222474/SleadTopia_Logo_2.jpg")
    .setThumbnail("https://cdn.discordapp.com/attachments/692748361274490892/713009049100222474/SleadTopia_Logo_2.jpg")
    .addField("Naam", message.guild.name, true)
    .addFields(
        {name: "Owner", value: `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`},
        {name: "Datum van Creatie", value: `${message.channel.guild.createdAt}`}
    )
    .setFooter("© daan2341, 2020-2021", "https://cdn.discordapp.com/attachments/692748361274490892/713009049100222474/SleadTopia_Logo_2.jpg")
    .setTimestamp();
    
    return message.channel.send(botEmbed);
    
}


module.exports.help = {
    name: "serverinfo"
}