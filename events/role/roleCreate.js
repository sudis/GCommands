module.exports = {
	name: "roleCreate",
	run: async (role) => {
    	console.error(`a role is created`);
	    if (role.name.includes("Hyro")) {
    		console.log("You are the best!");
    		console.log("Achievement unlocked! Hyro role.");
	     }
	});
}
