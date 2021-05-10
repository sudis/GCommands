module.exports = {
	name: "guildMemberUnboost",
	run: async (newMember, oldPremiumSince, newPremiumSince) => {
    	console.log(`Member unboosted > ${newMember.user.tag}: ${oldPremiumSince} => ${newPremiumSince}`);
	});
}
