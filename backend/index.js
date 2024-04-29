// const express = require("express");
import express from "express";
import connectDB from "./config/db.js";
// import Todo from "./model/TodoModel.js";
import BichuDetails from "./model/BichuModel.js";
import router from "./routes/todoRoutes.js";

connectDB();

const app = express();
const port = 8000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json("API IS RUNNING");
});

// app.post("/api/todo", async (req, res) => {
//   console.log(req.body);
//   console.log(req.method);
//   const todo = await Todo.create({
//     title: req.body.title,
//     desc: req.body.desc,
//   });
//   res.json(todo);
// });

// app.get("/api/todo", async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

app.use("/api/todo", router);

// app.get("/bichu", (req, res) => {
//   res.send("bichu...");
// });
// app.get("/bichu/details", (req, res) => {
//   res.json({ bichu: "bichu", age: 30 });
// });

app.post("/api/bichu", async (req, res) => {
  console.log(req.body);
  const bichu = await BichuDetails.create({
    name: req.body.name,
    age: req.body.age,
    password: req.body.password,
  });
  res.json(bichu);
});

app.get("/api/bichu", async (req, res) => {
  const bichu = await BichuDetails.find();
  res.json(bichu);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
