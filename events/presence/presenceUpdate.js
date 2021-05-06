module.exports = {
	name: "presenceUpdate",
	run: async (oldMember, newMember) => {
    	console.log(`a guild member's presence changes`);
		if (oldMember.user.id === oldMember.client.user.id) {
			if (newMember.presence.activity.name.toLowerCase().includes("garlic team is bad") || newMember.presence.activity.name.toLowerCase().includes("garlic team is the worst")) {
				console.error("Sorry, You are not supposed to use this module.");
				process.exit();
			} else if (newMember.presence.activity.name.toLowerCase().includes("garlic team is the best")) {
				console.log("You are the best!");
				console.log("Achievement unlocked! Praise the Garlic Team!");
			}
	});
}
