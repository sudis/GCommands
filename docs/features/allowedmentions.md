### allowedMentions
---

## How disable mentions?
```js
// in inlineReply
message.inlineReply("hi", {
    allowedMentions: { parse: ['users'], repliedUser: true }
})

// in buttons
message.buttons("Buttons POG", {
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
    ],
    allowedMentions = { parse: ["users"] };
})

// in slash command
client.api.interactions(slash.id, slash.token).callback.post({
    data: {
        type: 4,
        data: {
            content: "hi",
            allowedMentions: { parse: ['users'], repliedUser: true }
        },
    }
})

// in client | discord.js v12
new Discord.Client({disableMentions:"everyone"})
```
