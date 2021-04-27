# Permissions

### User permissions
```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	requiredPermission: "ADMINISTRATOR",
	run: async(client, slash) => {
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

### Own requiredPermissionMessage
```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	requiredPermission: "ADMINISTRATOR",
	requiredPermissionMessage: "You need have ADMINISTRATOR perms.",
	run: async(client, slash) => {
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
