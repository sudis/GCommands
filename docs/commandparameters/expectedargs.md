# expectedArgs

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	expectedArgs: "<name> <country> [age]",
	minArgs: 2,
	run: async(client, slash) => {
		console.log(slash.data.options)

		return "My ping is `" + Math.round(client.ws.ping) + "ms`"
		/*client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "My ping is `" + Math.round(client.ws.ping) + "ms`"
				}
			}
		}) # OLD | CAN USE */
  }
};
```

* Required
  * name
  * country
* Optional
  * age

Parameter `minArgs` specifies how many arguments are needed.
