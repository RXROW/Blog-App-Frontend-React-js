import React, { useState } from 'react';
import './update-profile.css'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/apiCalls/profileApiCall';
const user = {
  username:"Eslam Ahmed",
  bio:"hello my name is Eslam"

}
const UpdateProfileModal = ({setUpdateProfil , profile}) => {
 const dispatch=useDispatch()
    const [username,setUsername]=useState(profile.username);
    const [bio,setBio]=useState(profile.bio);
    const [password,setPassword]=useState("");
  
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
      e.preventDefault();
      const updateedUser={username,bio}
      if(password.trim()!==""){
        updateedUser.password=password;
      }
      dispatch(updateProfile(profile?._id,updateedUser));
      setUpdateProfil(false)
     

    }
  return (
    <div className='updata-profile'>
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title='close'>
          <i onClick={()=>setUpdateProfil(false)} 
          className="bi bi-x-circle-fill 
          updata-profile-form-close "></i> 
         </abbr>
         <h1 className="updata-profile-title">
          Update Your Profile
         </h1>
         <input 
         type="text" 
         className='updata-profile-input'
         onChange={(e)=>setUsername(e.target.value)}
         value={username}
         placeholder='UserName'/>
          <input 
         type="text" 
         className='updata-profile-input'
         onChange={(e)=>setBio(e.target.value)}
         placeholder='Bio'
         value={bio}/>
         <input 
         type="text" 
         className='updata-profile-input'
         onChange={(e)=>setPassword(e.target.value)}
         placeholder='Bassword'
         value={password}/>
         <button type="submit" className='updata-profile-btn'>
          Update Profile
         </button>

      </form>

      
    </div>
  );
}

export default UpdateProfileModal;

