module.exports = {
	name: "emojiDelete",
  	once: false,
	run: async(client, emoji) => {
    		console.log(`a custom emoji is deleted in a guild ${emoji}`);
	}
};
