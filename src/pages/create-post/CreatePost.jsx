import React, { useState } from "react";
import "./CreatePost.css";
import {toast , ToastContainer} from "react-toastify"
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setcategory] = useState("");
  const [file, setFile] = useState(null);
/// Form Submit Handler 
const formSubmitHandler = (e)=>{
  e.preventDefault();
  if(title.trim() === "") return  toast.error("Post Title is required"); 
  if(category.trim() === "") return toast.error("Post Category is required"); 
  if(description.trim() === "") return  toast.error("Post Description is required"); 
  if(!file) return toast.error("Post Image is required"); 
  // const formData=new formData();
  // formData.append("image", file);
  // formData.append("title", title);
  // formData.append("description", description);
  // formData.append("category", category);

  /// @ TODO - send to server 

 

  console.log({title,description,category,file})
}


  return (
    <section className="create-post">
      <ToastContainer/>
      <h1 className="create-post-title">Create New Post</h1>
      <form onSubmit={formSubmitHandler} className="create-post-form">
        <input
          type="text"
          placeholder="Post Title"
          className="create-post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="create-post-input"
        >
          <option disabled value="">
            Select All Category
          </option>
          <option value="programming">programming</option>
          <option value="backend">backend</option>
          <option value="frontend">frontend</option>
        </select>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="create-post-textarea"
          placeholder="Post Description"
          rows="5"
        ></textarea>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name="file"
          id="file"
          className="create-post-upload"
        />
        <button type="submit" className="create-post-btn">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
