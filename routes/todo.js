// 1 require express
const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// test route
router.get("/test", (req, res) => {
	res.send("Hello Todo");
});

// add todo
router.post("/add", async (req, res) => {
	try {
		const { title, description, isDone } = req.body;
		const newTask = new Todo({ title, description, isDone });
		await newTask.save();
		res.status(200).send({ msg: "Task add succ ..", newTask });
	} catch (error) {
		res.status(400).send({ msg: "Can not add the task !!!", error });
	}
});

// gel all todo
router.get("/getall", async (req, res) => {
	try {
		const todoList = await Todo.find();
		res.status(200).send({ msg: "The list of all todo ..", todoList });
	} catch (error) {
		res.status(400).send({ msg: "Can not get the list !!!", error });
	}
});

// get by id
router.get("/:id", async (req, res) => {
	try {
		const task = await Todo.findOne({ _id: req.params.id });
		if (!task) {
			return res.status(404).send({ msg: "Not found !!!" });
		}
		res.status(200).send({ msg: "I get get the task ..", task });
	} catch (error) {
		res.status(400).send({ msg: "Can not get the task !!!", error });
	}
});

// delete todo
router.delete("/:_id", async (req, res) => {
	try {
		const { _id } = req.params;
		const task = await Todo.findOneAndDelete({ _id });
		if (!task) {
			return res.status(404).send({ msg: "Not found !!!" });
		}
		res.status(200).send({ msg: "Task deleted.." });
	} catch (error) {
		res.status(400).send({ msg: "Can not delete the task !!!", error });
	}
});

// edit todo
router.put("/:_id", async (req, res) => {
	try {
		const { _id } = req.params;
		const result = await Todo.updateOne({ _id }, { $set: { ...req.body } });
		if (!result) {
			return res.status(404).send({ msg: "Not found !!!" });
		}
		res.status(200).send({ msg: "Task updated.." });
	} catch (error) {
		res.status(400).send({ msg: "Can not update the task !!!", error });
	}
});

// export
module.exports = router;
