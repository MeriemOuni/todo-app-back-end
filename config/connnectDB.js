// 1
const mongoose = require("mongoose");

// 2
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log("Database connected ...");
	} catch (error) {
		console.log("Can not connected !!");
	}
};

// 3
module.exports = connectDB;
