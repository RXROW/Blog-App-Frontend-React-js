import React, { useState } from 'react';
import './add-comment.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from '../../redux/apiCalls/commetApiCall';
const AddComment = ({postId}) => {
  const dispatch=useDispatch();
  
  const [text, setText] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();  
    if (text.trim() === "") return toast.error("please write something !");
   
    dispatch(createComment({text , postId}))
    setText("");
  };

  return (
    <form className="add-comment" onSubmit={formSubmitHandler}>
      <input 
        type="text" 
        placeholder='Add a comment' 
        className='add-comment-input' 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className='add-comment-btn'>Comment</button>
    </form>
  );
}

export default AddComment;
