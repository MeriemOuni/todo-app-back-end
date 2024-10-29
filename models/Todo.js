// 1 - require mongoose
const mongoose = require("mongoose");

// 2 - create schema
const schema = mongoose.Schema;

const todoSchema = new schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	isDone: { type: Boolean, default: false },
});

module.exports = Todo = mongoose.model("todo", todoSchema);
