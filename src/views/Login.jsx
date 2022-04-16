import React from "react";
import { Card, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login bg-dark mw-100 min-vh-100">
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center p-8">
        <Card style={{ width: "400px" }} className="p-3">
          <Card.Body>
            <Card.Title className="text-center">Member Login</Card.Title>
            <Form className="pt-3">
              <Form.Control type="email" placeholder="Email" className="mt-5" />

              <Form.Control
                type="password"
                placeholder="Password "
                className="mt-5"
              />

              <div className="text-center mt-5">
                <button className="btn btn-secondary text-center">LOGIN</button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
