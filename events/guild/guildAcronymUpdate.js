module.exports = {
	name: "guildAcronymUpdate",
	run: async (newGuild, oldAcronym, newAcronym) => {
    	console.log(`Guild leveled up! > ${newGuild.name}: ${oldAcronym} => ${newAcronym}`);
	});
}
