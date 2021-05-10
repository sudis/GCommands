module.exports = {
	name: "userAvatarUpdate",
	run: async (newUser, oldAvatar, newAvatar) => {
		console.log("Avatar updated! > " + oldAvatar + " => " + newAvatar);
	}
}
