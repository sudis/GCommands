### ownerOnly
---

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	ownerOnly: "id member",
	run: async(client, slash, message) => {
		if(message) {
			return message.inlineReply("hi", {
				allowedMentions: { parse: ["users"], repliedUser: true }
			})
		}
		client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "hi",
					allowedMentions: { parse: ["users"], repliedUser: true }
				}
			}
		})
  }
};
```

Enter the member id in the `ownerOnly` parameter.
