module.exports = {
	name: "channelPinsUpdate",
  	once: false,
	run: async(client, channel, time) => {
    		console.log(`channelPinsUpdate: ${channel}:${time}`);
	}
};
