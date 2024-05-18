/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import { useState } from "react";

export const AddTodo = ({
  todo,
  setTodo,
  todos,
  setTodos,
  getTodo,
  setTask,
  task,
}) => {
  // console.log(axios.toFormData(task, todo));
  const handleAdd = async () => {
    // if (task._id) {
    //   await axios.post("/api/todo", {
    //     // _id:task._id,
    //     // title: task.title,
    //     // desc: task.desc,
    //   });
    // getTodo();
    // setTodo({
    //   title: "",
    //   desc: "",
    // });
    // const edits = await todos.map((todo) =>
    // todo._id===task.id?{title:task._id}
    // console.log(todo._id)
    // );
    // console.log(edits);
    // getTodo();
    // } else {
    await axios.post("/api/todo", {
      title: todo.title,
      desc: todo.desc,
    });
    getTodo();
    setTodo({
      title: "",
      desc: "",
    });
    // }
  };
  // console.log(task);
  return (
    <>
      <div className="container mt-5 bg-color rounded-4 p-4">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">TO DO</Form.Label>
            <Form.Control
              value={todo.title}
              onChange={(e) =>
                setTodo({
                  title: e.target.value,
                })
              }
              name="title"
              type="text"
              placeholder="what do you need to do ?"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold">Discription</Form.Label>
            <Form.Control
              value={todo.desc}
              onChange={(e) =>
                setTodo({
                  title: todo.title,
                  desc: e.target.value,
                })
              }
              as="textarea"
              rows={3}
              name="desc"
            />
          </Form.Group>
        </Form>
        <div className="d-flex justify-content-end">
          <Button variant="info" size="lg" onClick={handleAdd}>
            Add To Do
          </Button>
        </div>
      </div>
    </>
  );
};
