import express from "express";
import Todo from "../../model/TodoModel.js";
// import Todo from "../../model/TodoModel.js";

const addTodo = async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title,
    desc: req.body.desc,
  });
  res.json(todo);
};

const getTodo = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted");
};

const updateTodo = async (req, res) => {
  const { title, desc } = req.body;
  const todo = await Todo.findById(req.params.id);
  todo.title = title || todo.title;
  todo.desc = desc || todo.desc;
  const updatedTodo = await todo.save();
  res.json(updatedTodo);
};

export { getTodo, addTodo, deleteTodo, updateTodo };
