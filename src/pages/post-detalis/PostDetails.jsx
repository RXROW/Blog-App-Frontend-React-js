import { Link, useParams , useNavigate } from "react-router-dom";
 
import './post-details.css';
import { useEffect, useState } from "react";
 import { toast   } from "react-toastify"; 
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import Swal from 'sweetalert2'
import UpdatePostModul from "./UpdatePostModul";
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, fetchSinglePost ,toggleLikePost, ubdatePostImage } from "../../redux/apiCalls/postApiCall";
 
const PostDetails = () => {
const navigate=useNavigate();
  const dispatch=useDispatch();
  const {post} = useSelector(state=>state.posts);
  const {user} = useSelector(state=>state.auth);
  const { id } = useParams(); 
  const [file ,setFile] =  useState(null);
  const [updatePost ,setUpdatePost] =  useState(false);
  useEffect(()=>{
  window.scrollTo(0,0);
  dispatch(fetchSinglePost(id))
  },[id])
  /// Upload image Submit Handler 
const uploadImageSubmitHandler = (e)=>{
  e.preventDefault();
  if(!file) return toast.warning("There is no file ! ")
 const formData=new FormData();
formData.append("image",file);
dispatch(ubdatePostImage(formData , post?._id))
}
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
        icon: "success",

      });
      dispatch(deletePost(post?._id));
      navigate(`/profile/${user?._id}`)
    }
  });
}
 


  return (
    <section className="post-details">

      <div className="post-details-image-wrapper">
        <img src= { file? URL.createObjectURL(file) :post?.image.url} alt="" className="post-details-image" />
        {
          user?._id === post?.user._id && (
            <form onSubmit={uploadImageSubmitHandler} className="update-post-image-form">
            <label htmlFor="file" className="update-post-label">
              <i className="bi bi-image-fill"></i>
              Select new image
            </label>
            <input 
            style={{display:"none"}} 
            type="file" 
            name="file" 
            id="file"
             onChange={(e)=>setFile(e.target.files[0])} />
            <button type="submit">Upload</button>
          </form>
          )
        }
      </div>
      <h1 className="post-details-title">{post?.title}</h1>
  
      <p className="post-details-description">
        {post?.description}
   
      </p>
      <div className="post-details-user-info">
        <img src={post?.user.profilePhoto?.url} alt="" className="post-details-user-image" />
        <div className="post-details-user">
          <strong>
            <Link to={`/profile/${post?.user._id}`}>{post?.user.username}</Link>
          </strong>
          <span>{new Date(post?.createdAt).toDateString()}</span>
        </div>
      </div>
      <div className="post-detials-icon-wrapper">
        <div>
        {
          user && (
            <i onClick={()=>dispatch(toggleLikePost(post?._id))} className= { !post?.likes.includes(user?._id) ? "bi bi-hand-thumbs-up-fill " :"bi bi-hand-thumbs-up  " } ></i>
            )}
        
          <small>{post?.likes.length} likes</small>
        </div>
        {
          user?._id === post?.user._id && (
            <div>
            <i onClick={()=>setUpdatePost(true)} className="bi bi-pencil-square"></i>
            <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
          </div>
          )
        }
      
      </div>
      {
        user ? <AddComment postId={post?._id}/>:<p className="post-detials-info-write">To Write a comment you should login first</p>
      }
      <CommentList comments={post?.comments}/>
        {updatePost && <UpdatePostModul post={post} setUpdatePost={setUpdatePost}/> }    
       
    </section>
  );
};

export default PostDetails;
