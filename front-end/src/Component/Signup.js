import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/Login')
    }
    const handleSubmit = (e) => {
        alert('SUbmitted Successfully')
    }
    return (
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <mark>Enter Your details here </mark><br></br><br /><br />
                Name : <br /><input required type='text' value={name} placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)} /><br></br>
                E-mail : <br /><input required type='email' value={email} placeholder='Enter your e-mail '
                    onChange={(e) => setEmail(e.target.value)} /><br></br>
                Password : <br /><input required type='password' value={password} placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)} /><br></br><br />
                <button  onClick={handleClick} id='signupbtn'>Signup</button>

            </form>
        </div>
    )
}


