import React, { useState } from "react";
import './comment-list.css'
import Swal from 'sweetalert2'
import UpdateCommentModul from "./UpdateCommentModul";
import Moment from 'react-moment'
import {  useSelector ,useDispatch } from 'react-redux'
import { deleteCommment } from "../../redux/apiCalls/commetApiCall";


const CommentList = ({comments}) => {
  const dispatch=useDispatch();

  const {post} = useSelector(state=>state.posts);
  const {user} = useSelector(state=>state.auth);

  
  const [updateComment,setUpdateComment]= useState(false);
  const [commentFormUpdate,setCommentFormUpdate]= useState(null);
  // Update Comment Handler 
  const  updateCommentHandler = (comment)=>{
    setCommentFormUpdate(comment)
    setUpdateComment(true)

  } 
  // Delete Comment Handler 
const deleteCommentHandler = (commentId)=>{
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
      dispatch(deleteCommment(commentId))
    }
  });
}
  return (
    <div className="comment-list">
      <h4 className="comment-list-count">{comments?.length} Comments </h4>
      {comments?.map((comment) => (
        <div key={comment?._id} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-username">{comment?.username}
            </div>
            <div className="comment-item-time">
              <Moment fromNow ago>
              {comment?.createdAt}
              </Moment>{" "} ago
        
            </div>

          </div>
          <p className="comment-item-text">
         {comment?.text} 

          </p>
          {
    user?._id === comment?.user && (
       
      <div className="comment-item-icon-wrapper">

      <i onClick={()=>updateCommentHandler(comment)} className="bi bi-pencil-square"></i>
      <i onClick={()=>deleteCommentHandler(comment?._id)} className="bi bi-trash-fill"></i>
      </div>
    )
  }
        </div>
      ))}


      {updateComment && <UpdateCommentModul commentFormUpdate={commentFormUpdate} setUpdateComment={setUpdateComment}/>}
    </div>
  );
};

export default CommentList;
