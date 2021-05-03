# Database Setup

```js
new GCommands(client, {
    cmdDir: "commands",
    errorMessage: "Error :(",
    slash: {
       slash: 'both', //true = slash only, false = only normal, both = slash and normal
       prefix: '.' 
    },
    cooldown: {
        message: "Please wait {cooldown} more second(s) before reusing the \`{cmdname}\` command.",
        default: 3
    },
    database: {
        type: "mongodb", //sqlite/mongodb
        url: "mongodb+srv://" //mongourl
    }
})
```
