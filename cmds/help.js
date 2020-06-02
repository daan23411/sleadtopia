const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    try{

        var text = "**Help Menu** \n\n **__COMMANDS:__** \n\n **GENERAL** \n !hallo - Groet terug! \n !serverinfo - Geeft server informatie. \n !ticket - Maakt een ticket aan! \n\n **MODERATOR** \n !kick - Kick een speler. (!kick (mention) (reden)) \n !ban - Verban een speler. (!ban (mention) (reden) \n !warn - Warn een speler (!warn (mention) (reden)) \n !tempmute - Tijdelijk muten van een speler (!tempmute) (speler) (tijd) \n\n **ADMIN** \n !clear - Verwijderd een aantal berichten (!clear (aantal)) \n !announce - Maak een mededeling! (!announcement titel | bericht | kleur (HEX Code) | kanaal (geen #)) \n\n **MEER CMDS SOON**"

        message.author.send(text);

        message.reply("Zie je DM berichten");

    }catch(error){
        message.reply("Er is iets misgegaan!");
    }

}

module.exports.help = {
    name: "help"
}