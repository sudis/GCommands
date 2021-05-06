module.exports = {
	name: "channelDelete",
  	once: false,
	run: async(client, channel) => {
    		console.log(`channelDelete: ${channel}`);
	}
};
