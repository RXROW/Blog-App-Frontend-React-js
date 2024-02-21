import React from 'react';
import { useState } from 'react';
import './form.css'
import {toast  } from "react-toastify"
 

const ResetPassword = () => { 
 
  const [password, setPassword] = useState("");
 
/// Form Submit Handler 
const formSubmitHandler = (e)=>{
  e.preventDefault();
  if(password.trim() === "") return  toast.error("Password is required"); 
  console.log({password})
 
}
  return (
    <section className='from-container'>
     
      <h2 className='form-title'>Reset  Password  </h2>
      <form onSubmit={formSubmitHandler} className='form'>
      <div className="form-group">
          <label htmlFor="password" className='form-lable'>
          New Password
          </label>
          <input type="password" 
          className="form-input"
          id='password'
          placeholder='Enter New Password  '
          value={password}
          onChange={(e)=>setPassword( e.target.value)} />
        </div>
        <button type="submit" className='form-btn'> Reset </button>
      </form>
     

    </section>
     
   
  );
}

export default ResetPassword;

