import React from "react";
import { Form, Button } from "react-bootstrap";

export const AuthView = () => {
  return (
    <section>
      <h3>Login</h3>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
      <Button variant="link">Don't have an account?</Button>
    </section>
  );
};
