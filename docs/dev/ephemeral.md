### Ephemeral (slash)

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	run: async(client, slash, message) => {
		return {
			content: "My ping is `" + Math.round(client.ws.ping) + "ms`",
			ephemeral: true // clyde
		}

		/*
						CAN USE
		return "My ping is `" + Math.round(client.ws.ping) + "ms`"
		*/
  }
};
```
