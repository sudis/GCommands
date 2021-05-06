module.exports = {
	name: "messageReactionRemove",
    	once: false,
	run: async(client, messageReaction, user) => {
        	console.log(`a reaction is removed from a message`);
	}
};
