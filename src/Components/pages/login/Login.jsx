import React, { useState } from 'react'
import './login.css'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")

    const url = ""

    const handleLogin = async () =>{

        try {
            const res = await axios.post(url, email)
            console.log(res)
        }catch(err){
            console.log(err)
        }finally{

        }
    }
  return (
    <div className='mains'>
        <div className='cards'>
           <div className='header'></div>
           <div className='login'>
              <h3>Log in</h3>
              <p>Enter your email and we'll send you a login code</p>
              <input 
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <div className='button' onClick={handleLogin}>continue</div>
              <span>Privacy</span>
           </div>
        </div>
    </div>
  )
}

export default Login