/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const TodoList = ({ todos, handleDelete }) => {
  const { _id, title, desc } = todos;
  // const handleDelete = () => {
  //   const deletes = todos.filter((todo) => {
  //     todo.id !== id;
  //   });
  //   console.log(deletes);
  // };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
        <Card
          border="secondary"
          className="mt-3 card-bodys"
          style={{ width: "25rem" }}
        >
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="cards">
              <Card.Text>{desc}</Card.Text>
            </div>

            <div className=" d-flex justify-content-between">
              <Button variant="secondary">Edit</Button>
              <Button onClick={handleDelete(_id)} variant="danger">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
