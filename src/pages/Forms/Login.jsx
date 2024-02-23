import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './form.css'
import {toast  } from "react-toastify"
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiCalls/authApiCall';
const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const dispatch =useDispatch()
 
/// Form Submit Handler 
const formSubmitHandler = (e)=>{
  e.preventDefault();
  if(email.trim() === "") return toast.error(" Email is required"); 
  if(password.trim() === "") return  toast.error("Password is required"); 
  dispatch(loginUser({email,password}))
 
}
  return (
    <section className='from-container'>
     
      <h2 className='form-title'>Login To Your Account </h2>
      <form onSubmit={formSubmitHandler} className='form'>
        <div className="form-group">
          <label htmlFor="email" className='form-lable'>
            Email
          </label>
          <input type="email" 
          className="form-input"
          id='email'
          placeholder='Enter Your Email  ' 
          value={email}
          onChange={(e)=>setEmail( e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password" className='form-lable'>
          Password
          </label>
          <input type="password" 
          className="form-input"
          id='password'
          placeholder='Enter Your Password  '
          value={password}
          onChange={(e)=>setPassword( e.target.value)} />
        </div>
        <button type="submit" className='form-btn'> Login </button>
      </form>
      <div className="form-footer">
       Did You Forgot Password ? 
       <Link to="/forgot-password"> Forgot ! </Link> 
      </div>

    </section>
     
   
  );
}

export default Login;
