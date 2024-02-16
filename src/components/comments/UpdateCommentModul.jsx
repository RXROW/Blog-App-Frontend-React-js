import React, { useState } from 'react';
import './update-comment.css'
import { toast } from 'react-toastify';
 


 
const UpdateCommentModul = ({setUpdateComment}) => {
    const [text,setText]=useState("This Comment");
     
  
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
      e.preventDefault();
      if(text.trim() === "") return  toast.error("Please Write Comment ! "); 
      console.log({text});

    }
  return (
    <div className='update-comment'>
      <form onSubmit={formSubmitHandler} className="update-comment-form">
        <abbr title='close'>
          <i onClick={()=>setUpdateComment(false)} className="bi bi-x-circle-fill update-comment-form-close "></i> 
         </abbr>
         <h1 className="update-comment-title">
          Edit Comment
         </h1>
         <input 
         type="text" 
         className='update-comment-input'
         onChange={(e)=>setText(e.target.value)}
         value={text}/>
          
         <button type="submit" className='update-comment-btn'>
          Edit Comment
         </button>

      </form>

      
    </div>
  );
}

export default UpdateCommentModul;
