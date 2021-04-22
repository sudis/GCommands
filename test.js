const { GCommands } = require("./src/index");
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    new GCommands(client, {
        cmdDir: "commands",
        ignoreBots: true,
        errorMessage: "Error :(",
        slash: {
           slash: 'both',
           prefix: '.' 
        }
    })
})

client.login("token")