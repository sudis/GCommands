const { GCommands } = require("gcommands");
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    new GCommands(client, {
        cmdDir: "commands",
        eventDir: "events",
        language: "english",
        unkownCommandMessage: false,
        slash: {
           slash: 'both', //true = slash only, false = only normal, both = slash and normal
           prefix: '.' // for normal commands
        },
        defaultCooldown: 3,
        database: {
            type: "mongodb",
            url: "mongodb+srv://",

             // if you want mariadb
            host: "ip",
            username: "username",
            password: "password",
            databaseName: "db name",
            port: "port"
        }
    })
    
    console.log("Ready")
})

client.login(process.env.token)
