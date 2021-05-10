module.exports = {
	name: "guildMemberBoost",
	run: async (newMember, oldPremiumSince, newPremiumSince) => {
    	console.log(`Member boosted > ${newMember.user.tag}: ${oldPremiumSince} => ${newPremiumSince}`);
	});
}
