import React from 'react';
import {toast  } from "react-toastify"
import { useState } from 'react';
const AddCategoryForm = () => {
  const [title, setTitle] = useState("");
  /// Form Submit Handler 
const formSubmitHandler = (e)=>{
  e.preventDefault();
  if(title.trim() === "") return  toast.error("Post Title is required");
  console.log({title}) 
   
}
  return (
    <div className="add-category">
      <h6 className="add-category-title">Add New Category</h6>
      <form onSubmit={formSubmitHandler} className="add-category-form">
        <div className="add-category-form-group">
          <label htmlFor="title">Category Title</label>
          <input type="text"
          id='title'
          placeholder='Enter Category Title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)} 
          />
        </div>
        <button className='add-category-btn' type="submit">Add Category</button>
      </form>

    </div>
     
  );
}

export default AddCategoryForm;
