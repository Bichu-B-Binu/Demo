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
  const deleted = await Todo.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json(deleted);
};

const updateTodo = async (req, res) => {
  const { _id } = req.params;
  const { title, desc } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(
    { _id: _id },
    { title: title, desc: desc }
  );
  res.json(updatedTodo);
};

export { getTodo, addTodo, deleteTodo, updateTodo };
