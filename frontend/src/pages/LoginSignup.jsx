import React from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' name="" id="" />
            <input type="email" placeholder='Email Address' />
            <input type="password"  placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Alredy have an account? <span>LogIn Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By Continuing , i agree to the terms of use and privacy policy.</p>
          </div>
 
      </div>
    </div>
  )
}

export default LoginSignup;
