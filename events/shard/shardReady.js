module.exports = {
	name: "shardReady",
	run: async (id, unavailableGuilds) => {
		console.log("Shard " + id + " is ready!");
	});
}
