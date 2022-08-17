import React from "react";
// import { Button, Col, Form, FormGroup, InputGroup, Row } from "react-bootstrap";
import {
  Input,
  Button,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Row,
} from "reactstrap";

function SubmitForm() {
  return (
    <div>
      {" "}
      <Form className="mt-4" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <Row>
          <Col md={6}>
            <FormGroup>
              <Input type="text" name="name" placeholder="Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
            type="textarea"
            name="message"
            id="exampleAddress"
            placeholder="Your message"
          />
        </FormGroup>

        <Button color="primary">Send Message</Button>
      </Form>
    </div>
  );
}

export default SubmitForm;
