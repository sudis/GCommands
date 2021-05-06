module.exports = {
	name: "shardError",
	run: async (error, shardID) => {
		console.error("Shard encountered an error: " + error);
	});
}
