import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export const TodoList = ({
  todo,
  todos,
  setTodos,
  getTodo,
  setTodo,
  setTask,
  task,
}) => {
  const [edit, setEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: todo.title,
    desc: todo.desc,
  });

  const { _id, title, desc } = todo;

  const handleDelete = async () => {
    await axios.delete(`/api/todo/${_id}`);
    getTodo();
  };
  const handleEdit = async () => {
    const update = await axios.patch(`/api/todo/${_id}`, {
      title: editedTodo.title,
      desc: editedTodo.desc,
    });
    getTodo();
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
        <Card
          border="secondary"
          className="mt-3 card-bodys"
          style={{ width: "25rem" }}
        >
          <Card.Body>
            {edit ? (
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold">TO DO</Form.Label>
                  <Form.Control
                    value={editedTodo.title}
                    onChange={(e) =>
                      setEditedTodo({ ...editedTodo, title: e.target.value })
                    }
                    name="title"
                    type="text"
                    placeholder="what do you need to do ?"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="fw-bold">Discription</Form.Label>
                  <Form.Control
                    value={editedTodo.desc}
                    onChange={(e) =>
                      setEditedTodo({
                        ...editedTodo,
                        desc: e.target.value,
                      })
                    }
                    as="textarea"
                    rows={3}
                    name="desc"
                  />
                </Form.Group>
              </Form>
            ) : (
              <div className="cards">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
              </div>
            )}

            <div className=" d-flex justify-content-between">
              {edit ? (
                <Button
                  onClick={() => {
                    setEdit(false);
                    handleEdit();
                  }}
                  variant="secondary"
                >
                  Apply
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setEdit(true);
                  }}
                  variant="secondary"
                >
                  Edit
                </Button>
              )}
              <Button onClick={handleDelete} variant="danger">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
