module.exports = {
	name: "guildUnavailable",
	run: async (guild) => {
    	console.error(`a guild becomes unavailable, likely due to a server outage: ${guild}`);
	});
}
