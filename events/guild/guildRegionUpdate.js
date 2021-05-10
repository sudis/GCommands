module.exports = {
	name: "guildRegionUpdate",
	run: async (newGuild, oldRegion, newRegion) => {
    	console.log(`Region changed! > ${newGuild.name}: ${oldRegion} => ${newRegion}`);
	});
}
