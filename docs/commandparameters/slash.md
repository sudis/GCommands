# Slash

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	slash: false,
	run: async(client, slash, message) => {
		if(message) {
			return message.inlineReply("hi", {
				allowedMentions: { parse: ["users"], repliedUser: true }
			})
		}
  }
};

module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	slash: true,
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

Enter the boolean in the `slash` parameter.<br>
Disable slash system for 1 command.
