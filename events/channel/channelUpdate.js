module.exports = {
	name: "channelUpdate",
  	once: false,
	run: async(client, oldChannel, newChannel) => {
    		console.log(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
	}
};
