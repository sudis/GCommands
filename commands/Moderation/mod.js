module.exports = {
    name: "mod",
    description: "mod cmd",
    expectedArgs: '<enable> <test>',
    subCommandGroup: "use",
    subCommand: ["ban;<id>","kick;<id>"],
    run: async(client, slash, message, args) => {
      if(message) {
        if(args[0] == "ban") {
          // code
        }
      }

      if(slash.data.options[0].options[0].name == "ban") {
        const member = client.users.cache.get(slash.data.options[0].options[0].options[0].value)
        // code
      }
  }
};