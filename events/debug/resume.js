module.exports = {
	name: "resume",
	run: async (replayed) => {
    	console.log(`whenever a WebSocket resumes, ${replayed} replays`);
	});
}
