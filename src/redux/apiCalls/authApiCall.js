import { authAction } from "../slices/authSlice";
import request from "../../utils/request";
import {toast} from 'react-toastify' 

// Login User
 export  function loginUser(user) {
   return async(dispatch)=>{
    try {
      const {data} =await request.post("/api/auth/login",user)
      dispatch(authAction.Login(data))
     } catch (error) {
      toast.error(error.response.data.message);
       
    }

  }
};
// Register User
export  function registerUser(user) {
  return async(dispatch)=>{
   try {
     const {data} =await request.post("/api/auth/register",user)
     dispatch(authAction.register(data.message))
     localStorage.setItem("userInfo",JSON.stringify(data))
   } catch (error) {
     toast.error(error.response.data.message);
      
   }

 }
};
// Logout User
export  function logoutUser() {
  return (dispatch)=>{
    dispatch(authAction.Logout());
    localStorage.removeItem("userInfo");
 

 }
 
};
 
