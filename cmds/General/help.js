const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    function getAll(client, message) {
        const embed = new discord.MessageEmbed()
        .setColor("RANDOM")

        const commands = (category) => {
            return client.commands
                .filter(cmd => cmd.category === category)
                .map(cmd => `- \`${cmd.name}\``)
                .join("\n");
        }

        const info = client.categories
            .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
            .reduce((string, category) => string + "\n" + category);

        return message.channel.send(embed.setDescription(info));
    }

}

module.exports.help = {
    name: "help",
    alaises: ["h"],
    category: "General",
    description: "Stuurt deze lijst.",
    usage: "[command | alais]",
    run: async (client, message, args) => {
        getAll(client, message);
    }
}