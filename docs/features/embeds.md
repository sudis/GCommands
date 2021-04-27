# Embeds
---

### How make embed? (slash command)
```js
var embed = new Discord.MessageEmbed().setTitle("test")

client.api.interactions(slash.id, slash.token).callback.post({
    data: {
        type: 4,
        data: await createAPIMessage(slash, embed)
    }
})

async function createAPIMessage(interaction, content) {
    const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
    .resolveData()
    .resolveFiles();
    
    return { ...apiMessage.data, files: apiMessage.files };
}
```

### How make embed? (buttons)
```js
var embed = Discord.MessageEmbed().setTitle("g")

message.buttons("Buttons POG", {
    buttons: [
        {
            style: 'url',
            label: 'Github!',
            url: 'https://github.com/Garlic-Team'
        },
        {
            style: 'blupurple',
            label: 'Heh',
            id: 'heh_button'
        }
    ],
    embed: embed
})
```

### Full example:
```js
const Discord = require("discord.js")

module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	run: async(client, slash, message) => {
		var embed = new Discord.MessageEmbed().setTitle("test")
	
		if(message) {
      return message.channel.send(embed)
		}
		
		client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: await createAPIMessage(slash, embed)
			}
		})
		
		async function createAPIMessage(interaction, content) {
		    const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
		    .resolveData()
		    .resolveFiles();
		    
		    return { ...apiMessage.data, files: apiMessage.files };
		}
  }
};
```
