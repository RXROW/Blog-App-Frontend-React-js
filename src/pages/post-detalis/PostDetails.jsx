import { Link, useParams } from "react-router-dom";
import { posts } from "../../dummyData";
import './post-details.css';
import { useEffect, useState } from "react";
 import { toast , ToastContainer  } from "react-toastify"; 
const PostDetails = () => {
  const [file ,setFile] =  useState(null)
  useEffect(()=>{
  window.scrollTo(0,0)
  },[])
  /// Upload image Submit Handler 
const uploadImageSubmitHandler = (e)=>{
  e.preventDefault();
  if(!file) return toast.warning("There is no file ! ")
  console.log("Image Upladed Successfully")
}
 

  const { id } = useParams();
  const post = posts.find((p) => p._id === parseInt(id));

  return (
    <section className="post-details">
      <ToastContainer theme="colored " position="top-center"/>
      <div className="post-details-image-wrapper">
        <img src= { file? URL.createObjectURL(file) :post.image} alt="" className="post-details-image" />
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
      </div>
      <h1 className="post-details-title">{post.title}</h1>
      <div className="post-details-user-info">
        <img src={post.user.image} alt="" className="post-details-user-image" />
        <div className="post-details-user">
          <strong>
            <Link to={"/profile/1"}>{post.user.username}</Link>
          </strong>
          <span>{post.createdAt}</span>
        </div>
      </div>
      <p className="post-details-description">
        {post.description}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        deserunt laborum, quos doloribus natus et corporis rem praesentium!
        Doloribus dignissimos dolores ad esse eveniet molestias, numquam nisi
        iste ut dolorem!
      </p>
      <div className="post-detials-icon-wrapper">
        <div>
          <i className="bi bi-hand-thumbs-up" ></i>
          <small>{post.likes.length} likes</small>
        </div>
        <div>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash-fill"></i>
        </div>

      </div>
    </section>
  );
};

export default PostDetails;
