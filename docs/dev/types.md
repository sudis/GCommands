# Types + Description (slash)

### All types:
<img src="https://i.imgur.com/FWCOevD.png">
Default type: 3

Format: `expectedArgs: '<channel:7:description>'` | name:type:description

### Type 7 example:
```js
module.exports = {
	name: "setchannel",
	description: "set channel",
	expectedArgs: '<channel:7:select channel>',
	minArgs: 1,
	run: async(client, slash, message, args) => {
		if(message) {
			if(args[0]) {
				return message.channel.send("My ping is `" + Math.round(client.ws.ping) + "ms`")
			} else {
				return message.channel.send("Need args")
			}
			return;
		}

		console.log(slash.data.resolved.channels)
		return "My ping is `" + Math.round(client.ws.ping) + "ms`"
		/*client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "My ping is `" + Math.round(client.ws.ping) + "ms`"
				}
			}
		})*/
	}
};
```

### Type 7 example for subCommandGroup | subCommand:
```js
module.exports = {
	name: "channel",
	description: "set channel",
	expectedArgs: '<channel:7:select channel>',
	subCommandGroup: "set",
	subCommand: ["admin;<channel:7:select channel>","game;<channel:7:select game channel>"], 
	minArgs: 1,
	run: async(client, slash, message, args) => {
		if(message) {
			if(args[0]) {
				return message.channel.send("My ping is `" + Math.round(client.ws.ping) + "ms`")
			} else {
				return message.channel.send("Need args")
			}
			return;
		}

		console.log(slash.data.resolved)
		return "My ping is `" + Math.round(client.ws.ping) + "ms`"
		/*client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "My ping is `" + Math.round(client.ws.ping) + "ms`"
				}
			}
		})*/
	}
};
```
