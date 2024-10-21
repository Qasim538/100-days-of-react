import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddBudgetMoadl = ({ show, handleClose }) => {

  function handleSubmit(e) {
    e.preventDafault()
  }



  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-3" controlId="name">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
              type="number"
              min={0}
              step={0.01}
              required
            ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              {" "}
              Add{" "}
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddBudgetMoadl;
