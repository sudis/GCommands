# Aliases

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	aliases: ["name2","name3"],
	run: async(client, slash, message) => {
		if(message) {
			return message.inlineReply("hi", {
				allowedMentions: { parse: ["users"], repliedUser: true }
			})
		}
		
		return "hi"
		/*client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "hi",
					allowedMentions: { parse: ["users"], repliedUser: true }
				}
			}
		}) # OLD | CAN USE */
  }
};
```

`aliases` is array
Only for normal commands!
