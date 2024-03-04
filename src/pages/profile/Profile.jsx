import React from 'react';
import './profile.css'
import { useState } from 'react';
import PostList from '../../components/posts/PostList';
import {posts} from '../../dummyData';
import {toast  } from "react-toastify"
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import UpdateProfileModal from './UpdateProfileModal';
import { useDispatch, useSelector } from 'react-redux'

import { UplaodProfilePhoto, getUserProfile } from '../../redux/apiCalls/profileApiCall';
import { useParams } from 'react-router-dom';


const Profile = () => {
const {profile}=useSelector(state=>state.profile)
  const {id}= useParams()
  const dispatch=useDispatch()
  const [file, setFile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);
  useEffect(()=>{
    dispatch(getUserProfile(id))
    window.scrollTo(0,0)
    },[id])
  /// Form Submit Handler 
const formSubmitHandler = (e)=>{
  e.preventDefault();
  if(!file) return toast.warning("Thare Is No File ! ");
  const formData= new FormData();
  formData.append("image",file);
  dispatch(UplaodProfilePhoto(formData))
 
}
// Delete Account Handler 
const deletePostHandler = ()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You Want To Delete Your Account ! ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your Account has been deleted.",
        icon: "success"
      });
    }
  });
}
  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-image-warpper">
          <img src={file ? URL.createObjectURL(file):profile?.profilePhoto.url} 
           alt="profile" 
           className="profile-image" />
           <form onSubmit={formSubmitHandler} >
            <abbr title='Choose Profile Photo'>
              <label 
              htmlFor="file" 
              className='bi bi-camera-fill uplaod-profile-photo-icon'
               > </label>
            </abbr>
            <input style={{display:"none"}} 
            type="file" 
            name="file" 
            id="file" 
            onChange={(e)=>setFile(e.target.files[0])}/>
            <button className='upload-profile-photo-btn'> Uplaod</button>

             </form>

        </div>
        <h1 className='profile-username'>{profile?.username}</h1>
        <p className="profile-bio">
         {profile?.bio}
        </p>
        <div className="user-date-joined">
          <strong>Date joined: </strong>
          <span>{new Date(profile?.createdAt).toDateString()}</span>
        </div>
        <button onClick={()=>setUpdateProfile(true)} className='profile-update-btn'>
          <i className="bi bi-file-person-fill"></i>
          Update Profile
        </button>
      </div>
      <div className="profile-posts-list">
        <h2>{profile?.username} Posts</h2>
        <PostList posts={posts}/>
      </div>
      <button onClick={deletePostHandler} className='delete-account-btn'>
        Delete Your Account
      </button>
      {updateProfile && <UpdateProfileModal profile={profile} setUpdateProfil={setUpdateProfile}/>}

    </section>
  
  );
}

export default Profile;
