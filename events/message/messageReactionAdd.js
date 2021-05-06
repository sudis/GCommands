module.exports = {
	name: "messageReactionAdd",
    once: false,
	run: async(client, messageReaction, user) => {
        console.log(`a reaction is added to a message`);
	}
};
