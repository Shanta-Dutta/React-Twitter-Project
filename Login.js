import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import  '../css/Login.css';
import Feed from './Feed';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
 

  return (
   
    <div  className="Login">
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label><strong>Email</strong></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label><strong>Password</strong> </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
         <Button action="/Feed"  block className="bt" size="lg" type="submit" disabled={!validateForm()}>Login</Button>
      </Form>
      </div>
     
    
  );
}



// class LoginContainer extends Component {
// //   constructor(props) {
// //     super(props)

// //     if (props.user) {
// //       alert("You can't login if you are logged in!")
// //       props.history.push('/ticket-list')
// //     }
// //   }

// //   render() {
// //     return <Login />;
// //   }
// // }

// // export default withRouter(LoginContainer)
