module.exports = {
	name: "channelCreate",
  	once: false,
	run: async(client, channel) => {
    		console.log(`channelCreate: ${channel}`);
	}
};
