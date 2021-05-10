module.exports = {
	name: "guildFeaturesUpdate",
	run: async (newGuild, oldFeatures, newFeatures) => {
    	console.log(`Guild Features changed! > ${newGuild.name}: ${oldFeatures.map(feature => `\`${feature}\``).join(", ")} => ${newFeatures.map(feature => `\`${feature}\``).join(", ")}`);
	});
}
