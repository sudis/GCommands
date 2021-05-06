module.exports = {
	name: "emojiUpdate",
  	once: false,
	run: async(client, oldEmoji, newEmoji) => {
    		console.log(`a custom guild emoji is updated ${oldEmoji} ${newEmoji}`);
	}
};
