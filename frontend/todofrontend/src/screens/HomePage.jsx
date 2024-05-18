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
  const [task, setTask] = useState({});

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

  return (
    <>
      <AddTodo
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        getTodo={getTodo}
        setTodos={setTodos}
        task={task}
        setTask={setTask}
      />
      <div className=" container">
        <div className=" row">
          {todos.map((todo) => (
            <div className=" col-lg-4" key={todo._id}>
              <TodoList
                todo={todo}
                setTodo={setTodo}
                todos={todos}
                setTodos={setTodos}
                getTodo={getTodo}
                task={task}
                setTask={setTask}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
