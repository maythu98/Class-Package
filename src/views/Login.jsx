import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import dispatchLogin from "../api/dispatchLogin";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);

  const errorDiv = error ? <div className="text-danger mt-3">{error}</div> : "";

  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    setError(null);
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    if (email.value && password.value) {
      dispatchLogin(dispatch, {
        username: email.value,
        password: password.value,
      }).then((res) => {
        console.log(res);
        if (!res.success) {
          setError(res.data);
        } else {
          navigate(state?.path || "/");
        }
      });
    }

    setValidated(true);
  };

  return (
    <div className="login bg-dark mw-100 min-vh-100">
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center p-8">
        <Card style={{ width: "400px" }} className="p-3">
          <Card.Body>
            <Card.Title className="text-center">Member Login</Card.Title>
            <Form
              noValidate
              validated={validated}
              className="pt-3"
              onSubmit={handleLogin}
              autoComplete="off"
            >
              <Form.Control
                value={email.value}
                onChange={email.onChange}
                type="email"
                placeholder="Email"
                className="mt-5"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Type Valid Email.
              </Form.Control.Feedback>

              <Form.Control
                value={password.value}
                onChange={password.onChange}
                type="password"
                placeholder="Password "
                className="mt-4"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Type Valid Password.
              </Form.Control.Feedback>

              {errorDiv}
              <div className="text-center my-4">
                <Button
                  className="btn btn-secondary text-center px-5"
                  type="submit"
                >
                  LOGIN
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
