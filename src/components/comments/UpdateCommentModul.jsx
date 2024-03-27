import React, { useState } from 'react';
import './update-comment.css'
import { toast } from 'react-toastify';
 

import { useDispatch    } from 'react-redux'
import { updateComment } from '../../redux/apiCalls/commetApiCall';

 
const UpdateCommentModul = ({setUpdateComment , commentFormUpdate}) => {
  const dispatch=useDispatch();


    const [text,setText]=useState(commentFormUpdate?.text);
     
  
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
      e.preventDefault();
      if(text.trim() === "") return  toast.error("Please Write Comment ! "); 
       dispatch(updateComment(commentFormUpdate?._id, {text} ));
       setUpdateComment(false)

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
