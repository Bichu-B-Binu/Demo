/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import axios from "axios";

export const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  // console.log(todo);

  // console.log(todos);
  const getTodo = async () => {
    const data = await axios.get("/api/todo");
    setTodos(data.data);
    // console.log(data.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleDelete = (_id) => {
    const deletes = todos.filter((todo) => todo._id !== _id);
    // console.log(deltes);
    setTodos(deletes);
  };
  return (
    <>
      <AddTodo
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <div className=" container">
        <div className=" row">
          {todos.map((todo) => (
            <div className=" col-lg-4" key={todo._id}>
              <TodoList todos={todo} handleDelete={handleDelete} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
