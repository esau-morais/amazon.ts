import { SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Components
import { ArrowBackRounded } from '@material-ui/icons'

import { Back } from '../components/index'
import { Container } from '../components/Login'


// Firebase auth
import { auth } from '../config/firebase'

const Login = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    // firebase job
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch(error => alert(error.message))
  }

  const register = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // firebase job to create a user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if the user was successfully created
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <Container>
      <form onSubmit={signIn}>
        <Back to="/">
          <ArrowBackRounded />
        </Back>

        <img src="/images/AmazonLogo.png" alt="Amazon Logo" />

        <p>Sign in to shop right now!</p>

        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        <button type="submit" className="login">Secure sign in</button>
        <span className="separator">or</span>
        <button type="button" className="register" onClick={register}>Register</button>
      </form>
    </Container>
  )
}

export default Login
