module.exports = {
	name: "messageUpdate",
    	once: false,
	run: async(client, oldMessage, newMessage) => {
        	console.log(`a message is updated`);
	}
};
