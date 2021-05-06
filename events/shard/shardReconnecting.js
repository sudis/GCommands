module.exports = {
	name: "shardReconnecting",
	run: async (id) => {
		console.warn("Shard " + id + " is now reconnecting!");
	});
}
