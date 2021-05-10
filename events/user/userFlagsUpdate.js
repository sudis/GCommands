module.exports = {
	name: "userFlagsUpdate",
	run: async (newUser, oldFlags, newFlags) => {
    	console.log(`Flags got changed > ${oldFlags.bitfield} => ${newFlags.bitfield}`);
	});
}
