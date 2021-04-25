### expectedArgs
---

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	expectedArgs: "<name> <country> [age]",
	minArgs: 2,
	run: async(client, slash) => {
		console.log(slash.data.options)

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

* Required
  * name
  * country
* Optional
  * age

Parameter `minArgs` specifies how many arguments are needed.
