import React from "react";
import './comment-list.css'
import Swal from 'sweetalert2'

// Delete Post Handler 
const deletePostHandler = ()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}
const CommentList = () => {
  return (
    <div className="comment-list">
      <h4 className="comment-list-count"> 2 Comments </h4>
      {[1,2].map((comment) => (
        <div key={comment} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-username">Eslam Ahemd
            </div>
            <div className="comment-item-time">
              2 Hours ago
            </div>

          </div>
          <p className="comment-item-text">
            Hello World I'm Eslam Ahmed

          </p>
          <div className="comment-item-icon-wrapper">
          <i className="bi bi-pencil-square"></i>
          <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
