import React from 'react'
import './LoginSignup.css'

import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

// import emil-icon from '../assets/eamil.png'


const LoginSignup = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text"placeholder='username' required />
                <FaUserAlt className='icon'/>
            </div>

            <div className='input-box'>
                <input type="password"placeholder='password' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forgot">
                <label ><input type="checkbox"  />remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <p>dont have an accout ? <a href="#">Register</a></p>
            </div>
        </form>

    </div>
    
  )
}

export default LoginSignup