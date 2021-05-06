module.exports = {
	name: "guildMemberAdd",
	once: false,
	run: async (member) => {
 	   console.log(`a user joins a guild: ${member.tag}`);
	});
}
