module.exports = {
	name: "userDiscriminatorUpdate",
	run: async (newUser, oldDiscrim, newDiscrim) => {
    	console.log(`Discriminator got changed > ${newUser.username}#${oldDiscrim} => ${newUser.username}#${newDiscrim}`);
	});
}
