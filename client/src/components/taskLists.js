import React from "react";
import Table from "react-bootstrap/Table";

function taskLists() {
  return (
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button variant="primary" className="mx-3">
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button variant="primary">
              <i className="bi bi-trash"></i>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default taskLists;
