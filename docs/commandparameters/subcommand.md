# subCommandGroup & subCommand

<div align="center">
	<img src="https://gblobscdn.gitbook.com/assets%2F-MZ-Ze0MbWnYL4h30NVT%2F-MZ7UmBLvtn-uKScxDrg%2F-MZ7V2ZrB_tWIdijHZ3P%2Funknown.png?alt=media&token=0b61d4f2-64c4-44d0-8388-ae2720c4430d">
</div>

```js
module.exports = {
	name: "test",
	description: "Test",
	expectedArgs: '<enable> <test>',
	subCommandGroup: "group",
	subCommand: ["button;<enable> <test>","pog;<disable> <button>"],
	minArgs: 1,
	run: async(client, slash, message, args) => {
		if(message) {
			if(args[0]) {
				return message.channel.send("My ping is `" + Math.round(client.ws.ping) + "ms`")
			} else {
				return message.channel.send("Need args")
			}
		}

		client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "My ping is `" + Math.round(client.ws.ping) + "ms`"
				}
			}
		})
	}
};
```

If you want to use `subCommand`, you currently need to specify arguments for each.
The `minArgs` argument still works.
