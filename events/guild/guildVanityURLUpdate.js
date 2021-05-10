module.exports = {
	name: "guildVanityURLUpdate",
	run: async (newGuild, oldVanity, newVanity) => {
    	console.log(`Guild leveled up! > ${newGuild.name}: https://discord.gg/${oldVanity} => https://discord.gg/${newVanity}`);
	});
}
