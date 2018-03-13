import React from 'react'

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleLogin} id='login-form'>
      <input type='text' id='username' placeholder='Username'/>
      <input type='password' id='password' placeholder='Password'/>
      <input type='submit' value='Login'/>
    </form>
  )
}

export default LoginForm
