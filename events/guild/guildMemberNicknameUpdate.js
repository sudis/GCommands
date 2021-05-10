module.exports = {
	name: "guildMemberNicknameUpdate",
	run: async (newMember, oldNick, newNick) => {
    	console.log(`Nickname got changed > ${oldNick} => ${newNick}`);
	});
}
