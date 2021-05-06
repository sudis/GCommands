module.exports = {
	name: "guildMemberRemove",
	run: async (member) => {
  		console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
	});
}
