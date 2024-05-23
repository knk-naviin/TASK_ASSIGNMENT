import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";

const TaskList = () => {
  const updateTask = () => {
    console.log("Update Task");
    setModalShow(true);
  };

  const deleteTask = () => {
    console.log("Delete Task");
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>Descriptoi sdjfn jsnfd</td>
            <td className="bi">
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => {
                  updateTask();
                }}
              >
                Update
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  deleteTask();
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskList;
