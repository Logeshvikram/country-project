import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/Home')
  }


  return (
    <div className='login'>

      <mark>Login here </mark><br></br><br /><br />

      E-mail : <br /><input required type='email' value={email} placeholder='Enter your e-mail '
        onChange={(e) => setEmail(e.target.value)} /><br></br>
      Password : <br /><input required type='password' value={password} placeholder='Enter your password'
        onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleClick} id='logbtn'>Login</button>

    </div>
  )
}


