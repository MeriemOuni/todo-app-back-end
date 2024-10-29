// 1 - require express
const express = require("express");

// 2 - create instance
const app = express();

// 5 - require dotenv
require("dotenv").config();

// 6 - connect database
const connectDB = require("./config/connnectDB");
connectDB();

// 7 - middleware body-parser
app.use(express.json());

// 8 - routes
app.use("/api/todo", require("./routes/todo"));

// 3 - create PORT
const PORT = process.env.PORT;

// 4 - create server
app.listen(PORT, (err) => {
	err
		? console.log(`Can not connnect ${err}`)
		: console.log(`Server is running on port ${PORT} `);
});
