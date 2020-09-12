import React from 'react';
// Components
import { Container } from "../components/Login";

export default function Login() {
  return (
    <Container>
      <form>
        <img src="/images/AmazonLogo.png" alt="Amazon Logo" />

	<p>Sign in to shop right now!</p>

	<input type="email" placeholder="Email"  />
	<input type="password" placeholder="Password"  />

	<button>Secure sign in</button>
      </form>
    </Container>
  )
}
