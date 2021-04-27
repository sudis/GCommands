### inlineReply
---

## How use inlineReply without discord.js v13?
```js
message.inlineReply("go hi")

// Example: 
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	run: async(client, slash, message) => {
		if(message) {
			return message.inlineReply("hi")
		}
	
		client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "hi",
				}
			}
		})
  }
};
```
