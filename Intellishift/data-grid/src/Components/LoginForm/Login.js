import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel  } from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import { Auth } from "aws-amplify";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
   function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
  event.preventDefault();

  try {
    await Auth.signIn(email, password);
    alert("Logged in");
  } catch (e) {
    alert(e.message);
  }
}

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}