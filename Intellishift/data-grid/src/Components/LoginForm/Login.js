import React, { Component,useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';
import history from '../../history';
export default function Login(props) {
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");

function handleSubmit(event) {
event.preventDefault();
}
return (
<div className="Login">
<h1> Welcome </h1>
<form onSubmit={handleSubmit}>
<FormGroup controlId="Username" bsSize="large">
<FormLabel>Username  </FormLabel>
<FormControl
autoFocus
type="text"
value={username}
onChange={e => setUserName(e.target.value)}
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
<Button block bsSize="large"  onClick={() => history.push('/datagrid')}>
Login
</Button>
</form>
</div>
);
}