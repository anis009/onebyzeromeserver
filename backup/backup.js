const { exec } = require("child_process");

// Function to execute the mongodump command
exports.executeMongoDump = () => {
	const connectionURI = process.env.MONGO_URI; // Replace with your MongoDB connection details
	const backupCommand = `mongodump --uri="${connectionURI}"`;

	exec(backupCommand, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error executing mongodump command: ${error.message}`);
			return;
		}

		console.log(
			`MongoDB backup completed successfully at ${new Date().toLocaleString()}`
		);
	});
};
