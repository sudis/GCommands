module.exports = {
	name: "emojiCreate",
  	once: false,
	run: async(client, emoji) => {
    		console.log(`a custom emoji is created in a guild ${emoji}`);
	}
};
