import React, { useState } from 'react';
import './update-post.css'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { ubdatePost } from '../../redux/apiCalls/postApiCall';
import { fetchCategories } from '../../redux/apiCalls/categoryApiCall';
import  {  useEffect } from "react";

const UpdatePostModul = ({setUpdatePost , post}) => {


  const {categories} = useSelector(state => state.category );
  useEffect(()=>{
   dispatch(fetchCategories())
  },[])



  const dispatch=useDispatch();
 
   
    const [title,setTitle]=useState(post.title);
    const [description,setDescription]=useState(post.description);
    const [category,setCategory]=useState(post.category);
  
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
      e.preventDefault();
      if(title.trim() === "") return  toast.error("Post Title is required"); 
      if(category.trim() === "") return toast.error("Post Category is required"); 
      if(description.trim() === "") return  toast.error("Post Description is required"); 
     dispatch(ubdatePost({title,category,description},post?._id));
     setUpdatePost(false);

    }
  return (
    <div className='updata-post'>
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title='close'>
          <i onClick={()=>setUpdatePost(false)} className="bi bi-x-circle-fill update-post-form-close "></i> 
         </abbr>
         <h1 className="update-post-title">
          Update Post
         </h1>
         <input 
         type="text" 
         className='update-post-input'
         onChange={(e)=>setTitle(e.target.value)}
         value={title}/>
         <select
          className="update-post-input"
          onChange={(e)=>setCategory(e.target.value)}
         value={category}
        >
          <option disabled value="">
            Select All Category
          </option>
          {categories.map(category=> 
          <option key={category._id} value={category.title}>{category.title}</option> )}
         
        </select>
         <textarea
          className='update-post-textarea' 
          rows="5"
          onChange={(e)=>setDescription(e.target.value)}
         value={description}
         ></textarea>
         <button type="submit" className='update-post-btn'>
          Update Post
         </button>

      </form>

      
    </div>
  );
}

export default UpdatePostModul;
