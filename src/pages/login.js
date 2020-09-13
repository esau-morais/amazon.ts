import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// Components
import { Container } from "../components/Login";
import { Back } from "../components/index";
import { ArrowBackRounded } from "@material-ui/icons";
// Firebase auth
import { auth } from "../config/firebase";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    // firebase job
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    // firebase job to create a user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if the user was successfully created
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <Container>
      <form>
        <Back to="/">
          <ArrowBackRounded />
        </Back>

        <img src="/images/AmazonLogo.png" alt="Amazon Logo" />

        <p>Sign in to shop right now!</p>

        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        <button className="login" onClick={signIn}>Secure sign in</button>
        <span className="separator">or</span>
        <button className="register" onClick={register}>Register</button>
      </form>
    </Container>
  )
}
