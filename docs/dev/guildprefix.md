# Guild Prefix

```js
module.exports = {
	name: "setprefix",
	description: "set guild prefix",
	expectedArgs: '<prefix>',
	minArgs: 1,
	cooldown: 3,
	requiredPermission: "MANAGE_GUILD",
	run: async(client, slash, message, args) => {
		if(message) {
			if(args[0]) {
        client.user.setGuildPrefix(args[0], message.guild.id)
				return message.channel.send("My new prefix is `" + args[0] + "`")
			} else {
				return message.channel.send("Need args")
			}
			return;
		}

    client.user.setGuildPrefix(slash.data.options[0].value, slash.guild_id)
		client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "My new prefix is `" + slash.data.options[0].value + "`"
				}
			}
		})
	}
};
```

# Get guild prefix
```js
client.user.getGuildPrefix("guildId")
```
