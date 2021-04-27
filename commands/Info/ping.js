module.exports = {
    name: "ping",
    description: "ping pog",
    run: async(client, slash, message) => {
      if(message) {
        message.inlineReply("My ping is `" + Math.round(client.ws.ping) + "ms`")

        // or channel.send
      }

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