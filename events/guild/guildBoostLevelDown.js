module.exports = {
	name: "guildBoostLevelDown",
	run: async (newGuild, oldPremiumTier, newPremiumTier) => {
    	console.log(`Guild level loss! > ${newGuild.name}: ${oldPremiumTier} => ${newPremiumTier}`);
	});
}
