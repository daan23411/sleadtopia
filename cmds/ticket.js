const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "713337970828115969";

    var userName = message.author.username;
    var userDisciminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDisciminator) {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt!");

        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hoi " + message.author.username)
        .setDescription("We maken een support ticket voor je aan!")
        .setFooter("© daan2341, 2020 - 2021");

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDisciminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        ADD_REACTIONS: true,
                        CONNECT: true,
                    });

                    var embadParent = new discord.MessageEmbed()
                    .setTitle(`Hoi ${message.author.username}`)
                    .setDescription("Zet hier je vraag / bericht aan het staffteam")
                    .setFooter("© daan2341, 2020 - 2021");

                    settedParent.send(embadParent);

                }
            ).catch(err => {
                message.channel.send("Er is iets misgegaan! Kijk console voor complete log");
            })
        }
    ).catch(err => {
        message.channel.send("Er is iets misgegaan! Kijk console voor complete log");
    })
}

module.exports.help = {
    name: "ticket"
}