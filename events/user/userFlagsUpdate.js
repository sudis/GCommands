module.exports = {
	name: "userFlagsUpdate",
	run: async (newUser, oldFlags, newFlags) => {
    	console.log(`username got changed > ${oldFlags.bitfield} => ${newFlags.bitfield}`);
	});
}
