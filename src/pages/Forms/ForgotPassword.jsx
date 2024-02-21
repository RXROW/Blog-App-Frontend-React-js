import React from 'react';
import { useState } from 'react';
import './form.css'
import {toast  } from "react-toastify"

const ForgotPassword = () => { 
  const [email, setEmail] = useState("");
 
 
/// Form Submit Handler 
const formSubmitHandler = (e)=>{
  e.preventDefault();
  if(email.trim() === "") return toast.error(" Email is required"); 
  console.log({email})
 
}
  return (
    <section className='from-container'>
     
      <h2 className='form-title'>Forgot Password  </h2>
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
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit" className='form-btn'> Submit </button>
      </form>
     

    </section>
     
   
  );
}

export default ForgotPassword;

