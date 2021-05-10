module.exports = {
	name: "guildBoostLevelUp",
	run: async (newGuild, oldPremiumTier, newPremiumTier) => {
    	console.log(`Guild leveled up! > ${newGuild.name}: ${oldPremiumTier} => ${newPremiumTier}`);
	});
}
