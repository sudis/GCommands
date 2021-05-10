module.exports = {
	name: "guildBannerUpdate",
	run: async (newGuild, oldBanner, newBanner) => {
    	console.log(`Guild banner updated > ${newGuild.name}: ${oldBanner} => ${newBanner}`);
	});
}
