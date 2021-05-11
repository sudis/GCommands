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

```js
module.exports = {
    name: "xxx",
    description: "xxx",
    expectedArgs: [
		{
			name: "list of food", // arg name
			type: "3", // arg type
			description: "select food", // arg description
			required: true, // is required
			choices: [
				{
					name: "Potato", // arg choices 1
					value: "potato" // arg choices 21
				},
				{
					name: "Chocolate", // arg choices 2
					value: "chocolate" // arg choices 2
                }
			]
		},
		{
			name: "user", // arg name
			type: "6", // arg type
			description: "select user who want food", // arg description
			required: false // is required
		}
	],
    run: async(client, slash) => {
        console.log(slash)
        // ...
  }
};
```

* Required
  * name
  * country
* Optional
  * age

Parameter `minArgs` specifies how many arguments are needed.
