import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import Swal from "sweetalert2";

import './form.css'
import {toast  } from "react-toastify"
import { registerUser  } from '../../redux/apiCalls/authApiCall';
const Register = () => {
  const dispatch =useDispatch();
  const {registerMessage} = useSelector(state => state.auth);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
/// Form Submit Handler 
const formSubmitHandler = (e)=>{
  e.preventDefault();
  if(username.trim() === "") return  toast.error("Username is required"); 
  if(email.trim() === "") return toast.error(" Email is required"); 
  if(password.trim() === "") return  toast.error("Password is required"); 
   dispatch(registerUser({username,email,password}))
   if(registerMessage){
  
    Swal.fire({
      title : registerMessage,
       icon: "success",
   
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
       navigate("/login")
      }
    });
   
  }
}

  return (
    <section className='from-container'>
     
      <h2 className='form-title'>Create New Account </h2>
      <form onSubmit={formSubmitHandler} className='form'>
        <div className="form-group">
          <label htmlFor="username" className='form-lable'>
            Username
          </label>
          <input type="text" 
          className="form-input"
          id='username'
          placeholder='Enter Your User Name  ' 
          value={username}
          onChange={(e)=>setUsername( e.target.value)}/>
        </div>
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
        <button type="submit" className='form-btn'> Register </button>
      </form>
      <div className="form-footer">
        Already Have An Account? <Link to="/login">Login </Link> 
      </div>

    </section>
     
   
  );
}

export default Register;
