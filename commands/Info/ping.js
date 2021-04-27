module.exports = {
    name: "ping",
    description: "ping pog",
    run: async(client, slash, message) => {
      if(message) {
        message.inlineReply("My ping is `" + Math.round(client.ws.ping) + "ms`")

        // or channel.send
      }

      return "My ping is `" + Math.round(client.ws.ping) + "ms`"
  }
};
