module.exports = {
	name: "messageDeleteBulk",
    once: false,
	run: async(client, messages) => {
        console.log(`messages are deleted -> ${messages}`);
	}
};
