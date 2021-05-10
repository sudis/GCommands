# Event Handler

### GCommands + GEvents
```js
const { GCommands } = require("gcommands")

new GCommands(client, {
    ...
    eventDir: "events", //when you want event handler
    ...
})
``` 

### When you want only event handler
```js
const { GEvents } = require("gcommands")

new GEvents(client, {
  eventDir: "events"
})
```

### Event example:
```js
module.exports = {
	name: "message",
	once: false,
	run: async(client, message) => {
		console.log(`${message.author.tag} -> ${message.content}`)
	}
};
```
