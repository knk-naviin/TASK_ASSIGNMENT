import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addtask = (e) => {
    // e.preventDefault();
    console.log({ title, description });
  };

  return (
    <>
      <section className="my-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Tasks</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="text-end">
            <Button variant="primary" type="submit" onClick={() => addtask()}>
              Add Tasks
            </Button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default AddTask;
