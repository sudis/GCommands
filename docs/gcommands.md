# Getting started with GCommands

### Need have discord.js v12
```
npm i gcommands
```

### Creating index.js file
```js
const { GCommands } = require("gcommands");
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    new GCommands(client, {
        cmdDir: "commands",
        errorMessage: "Error :(", // optional
        slash: {
           slash: 'both', //true = slash only, false = only normal, both = slash and normal
           prefix: '.' // for normal commands
        },
        cooldown: {
            message: "Please wait {cooldown} more second(s) before reusing the \`{cmdname}\` command.",
            default: 3 // default cooldown for all commands
        }
    })
    
    console.log("Ready")
})

client.login("token")
```

In the `cmdDir` parameter, enter the name of folder to which you will add commands.<br>
`errorMessage` parameter is used to write this message when the command does not exist.<br>
`slash.Slash` parameter determines whether you want slash commands / normal or both.

> 
> Use enviroment variables for more security! (token)
>

> 
> Global commands are cached for 1 hour. That means that new global commands will fan out slowly across all guilds, and will be guaranteed to be updated in an hour.
> 
> Guild commands update instantly. We recommend you use guild commands for quick testing, and global commands when they're ready for public use.
> 
