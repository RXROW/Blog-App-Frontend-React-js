import {  ProfileAction } from "../slices/prfileSlice";
import {  authAction } from "../slices/authSlice";
import request from "../../utils/request";
import {toast} from 'react-toastify' 

// Get User Profile
 export  function getUserProfile(userId) {
   return async(dispatch)=>{
    try {
      const {data} =await request.get(`/api/users/profile/${userId}`)
      dispatch(ProfileAction.setProfile(data))
    } catch (error) {
      toast.error(error.response.data.message);
     console.log(error)
      
    }

  }
};
//  Upload Profile photo 
export  function UplaodProfilePhoto(newPhoto) {
  return async(dispatch , getState)=>{
   try {
  
     const {data} =await request.post(`/api/users/profile/profile-photo-upload`,newPhoto , {
      headers:{
        Authorization:"Bearer " + getState().auth.user.token,
        "Content-Type":"multipart/form-data"
      }
     });

     dispatch(ProfileAction.setProfilePhoto(data.ProfilePhoto));
     dispatch(authAction.setUserPhoto(data.ProfilePhoto));
     toast.success(data.massage);
     // Modifay the Local Storage
     const user =JSON.parse(localStorage.getItem("userInfo"));
     user.profilePhoto=data?.profilePhoto;
     localStorage.setItem("userInfo",JSON.stringify(user))

   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};
//  Update Profile 
export  function updateProfile(userId,profile) {
  return async(dispatch , getState)=>{
   try {
  
     const {data} =await request.put(`/api/users/profile/${userId}`,profile , {
      headers:{
        Authorization:"Bearer " + getState().auth.user.token,
      }
     });

     dispatch(ProfileAction.updateProfile(data));
     dispatch(authAction.setUsername(data.username));
   
     // Modifay the Local Storage to username
     const user =JSON.parse(localStorage.getItem("userInfo"));
     user.username=data?.username;
     localStorage.setItem("userInfo",JSON.stringify(user))

   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};

