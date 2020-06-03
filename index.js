const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();
client.commands = new discord.Collection();

client.categories = fs.readdirSync("./cmds/");

if(jsFiles.length <= 0)  {
    console.log("Kon geen files vinden");
    return;
}

jsFiles.forEach((f, i) => {

    
    console.log(`De file ${f} zijn geladen!`);

    client.commands.set(fileGet.help.name, fileGet);

})


client.on("guildMemberAdd", member =>{

    var role = member.guild.roles.cache.get('717075571581911121');

    if(!role) return console.log("Role bestaat niet");

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('717077856772948000');

    if(!channel) return console.log("channel bestaat niet");

    channel.send(`Welkom in de server ${member}! Lees de regels in #regels`)

})


client.login(process.env.token);

client.on("ready", async () => {

console.log(`${client.user.username} is online.`);
client.user.setActivity("Daan", {type: "WATCHING"})

});

client.on("message", async message => {

if(message.author.bot) return;

if(message.channel.type == "dm") return;

var prefix = botConfig.prefix

var messageArray = message.content.split(" ");

var command = messageArray[0];

if(!message.content.startsWith(prefix)) return;

var args = messageArray.slice(1);

var commands = client.commands.get(command.slice(prefix.length));

if(commands) commands.run(client, message, args);

});