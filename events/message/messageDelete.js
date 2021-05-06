module.exports = {
	name: "messageDelete",
    once: false,
	run: async(client, message) => {
        console.log(`message is deleted -> ${message}`);
	}
};
