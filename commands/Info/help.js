module.exports = {
    name: "help",
    description: "bot help",
    run: async(client, slash, message) => {
      var embed = Discord.MessageEmbed().setTitle("g").setDescription("help command!")

      if(message) {
        message.channel.send(embed)
      }

      client.api.interactions(slash.id, slash.token).callback.post({
          data: {
              type: 4,
              data: await createAPIMessage(slash, embed)
          }
      })

      async function createAPIMessage(interaction, content) {
        const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
          .resolveData()
          .resolveFiles();
        
        return { ...apiMessage.data, files: apiMessage.files };
      }
  }
};