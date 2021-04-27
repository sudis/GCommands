# inlineReply

### How use inlineReply without discord.js v13?
```js
message.inlineReply("go hi")

message.buttonsWithReply("Buttons POG", {
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
    ]
})

// Example: 
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	run: async(client, slash, message) => {
		if(message) {
			return message.inlineReply("hi")
		}
	
		return "hi"
		/*client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "hi",
				}
			}
		}) # OLD | CAN USE */
  }
};
```
