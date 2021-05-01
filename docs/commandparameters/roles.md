# Roles

### User roles
```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	requiredRole: "ROLE ID",
	run: async(client, slash) => {
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

### Own requiredRoleMessage
```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	requiredRole: "ROLE ID",
	requiredRoleMessage: "You need have admin role.",
	run: async(client, slash) => {
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
