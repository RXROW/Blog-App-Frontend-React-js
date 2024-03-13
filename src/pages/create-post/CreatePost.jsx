import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/apiCalls/postApiCall";
import { BeatLoader } from "react-spinners";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";

const CreatePost = () => {
  const {categories} = useSelector(state => state.category );
 
  const dispatch = useDispatch();
  const { loading, isPostCreated } = useSelector(state => state.posts);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  /// Form Submit Handler 
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (description.trim() === "") return toast.error("Post Description is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    dispatch(createPost(formData));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isPostCreated) {
      navigate("/");
    }
  }, [isPostCreated, navigate]);
 
 useEffect(()=>{
  dispatch(fetchCategories())
 },[])
  return (
    <section className="create-post">
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
          onChange={(e) => setCategory(e.target.value)}
          className="create-post-input"
        >
          <option disabled value="">
            Select All Category
          </option>
          {categories.map(category=> 
          <option key={category._id} value={category.title}>{category.title}</option> )}
     
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
        <button type="submit" className="create-post-btn" disabled={loading}>
          {loading ? (
<BeatLoader color="#ffffff" />) : "Create"}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
