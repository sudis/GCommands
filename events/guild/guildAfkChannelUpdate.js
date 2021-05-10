module.exports = {
	name: "guildAfkChannelUpdate",
	run: async (newGuild, oldAfkChannel, newAfkChannel) => {
    	console.log(`Guild AFK channel updated > ${newGuild.name}: ${oldAfkChannel.name} => ${newAfkChannel.name}`);
	});
}
