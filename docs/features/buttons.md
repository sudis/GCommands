# Buttons

<div align="center">
  <img src="https://gblobscdn.gitbook.com/assets%2F-MZ-Ze0MbWnYL4h30NVT%2F-MZ3DI9HSf3A5iSn6G__%2F-MZ3DlNBFtnS1422-5Tf%2Fbuttons.png?alt=media&token=92a879fc-e9e8-4e34-9e81-03f570f3bc5e">
</div>

* All styles
  * url
  * blupurple
  * grey
  * green
  * red

* All options
  * label: string
  * style: style (string)
  * url: url (string)
  * id: string 

```js
// For normal command

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
    ]
})

// embeds
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
    embed: new Discord.MessageEmbed().setTitle("go")
})

// For slash command

const { Buttons } = require("gcommands"); // NEED IMPORT IN COMMAND

client.api.interactions(slash.id, slash.token).callback.post({
    data: {
	      type: 4,
        data: {
          components: [{
            type: 1,
            components: new Buttons({
              buttons: [
                {
                  style: "url",
                  label: "Github",
                  url: "https://github.com/Garlic-Team"
                },
                {
                  style: 'blupurple',
                  label: 'Heh',
                  id: 'heh_button'
                }
              ]
            })
          }],
          content: "Buttons POG"
        }
    }
})
```

### How to detect when you click on the button?
```js
client.on("clickButton", (button) => {
  if(button.id == "heh_button") {
    button.message.channel.send("heh")
  }
})

// With "antispam" clicking
const usedHehButton = new Discord.Collection();

client.on("clickButton", (button) => {
  if(!usedHehButton.get(button.message.id)) {
    if(button.id == "heh_button") {
      usedHehButton.set(button.message.id, true)
      button.message.channel.send("heh")

      setTimeout(() => usedHehButton.delete(button.message.id), 60000);
    }
  }
})
```

⚠️ If you are using buttons, remove errorMessage in the constructor.
⚠️ If the button style is "url", you must provide url 
⚠️ If the button style is not "url", you must provide custom id
