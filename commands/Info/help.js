module.exports = {
    name: "help",
    description: "bot help",
    run: async(client, slash, message) => {
      var embed = Discord.MessageEmbed().setTitle("g").setDescription("help command!")

      if(message) {
        message.channel.send(embed)
      }

      return embed;
  }
};
