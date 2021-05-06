module.exports = {
	name: "shardResume",
	run: async (id, replayedEvents) => {
		console.log("Shard " + id + " is resumed.");
	});
}
