module.exports = {
	name: "error",
	run: async (error) => {
    	console.error(`client's WebSocket encountered a connection error: ${error}`);
	});
}
