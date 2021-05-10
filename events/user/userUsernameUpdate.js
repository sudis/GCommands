module.exports = {
	name: "userUsernameUpdate",
	run: async (newUser, oldUsername, newUsername) => {
    	console.log(`username got changed > ${oldUsername} => ${newUsername}`);
	});
}
