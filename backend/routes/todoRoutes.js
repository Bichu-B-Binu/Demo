import express from "express";
import Todo from "../model/TodoModel.js";
import {
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "./contorllers/todoControllers.js";

const router = express.Router();

router.route("/").get(getTodo).post(addTodo);
router.route("/:id").delete(deleteTodo).patch(updateTodo);

// router.post("/", async (req, res) => {
//   const todo = await Todo.create({
//     title: req.body.title,
//     desc: req.body.desc,
//   });
//   res.json(todo);
// });
// router.get("/", async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

export default router;
