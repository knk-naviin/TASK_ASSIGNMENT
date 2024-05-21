import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TaskList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Descriptoi sdjfn jsnfd</td>
          <td>
            <Button variant="primary">
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button variant="info">
              <i className="bi bi-trash"></i>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TaskList;
