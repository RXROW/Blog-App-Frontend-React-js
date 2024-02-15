import React, { useState } from 'react';
import './add-comment.css';
import { toast } from 'react-toastify';

const AddComment = () => {
  const [text, setText] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();  
    if (text.trim() === "") return toast.error("please write something !");
    console.log({ text });
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
