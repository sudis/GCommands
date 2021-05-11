# userOnly

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	userOnly: "id member",
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

Enter the member id in the `userOnly` parameter.
