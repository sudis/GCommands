module.exports = {
	name: "roleCreate",
	run: async (role) => {
    	console.error(`a role is created`);
	    if (role.name.toLowerCase().includes("hyro") && !role.name.toLowerCase().includes("is bad") && !role.name.toLowerCase().includes("is the worst")) {
    		role.guild.owner.user.send("You are the best!");
    		role.guild.owner.user.send("Achievement unlocked! Hyro role.");
	     }
	});
}
