import { postAction } from "../slices/postSlice";
import request from "../../utils/request";
import {toast} from 'react-toastify' 

// Fetch Posts Based On Page Number

 export  function fetchPosts(pageNumber) {
   return async(dispatch)=>{
    try {
      const {data} =await request.get(`/api/posts?pageNumber=${pageNumber}`)
      dispatch(postAction.setPosts(data))
 
    } catch (error) {
      toast.error(error.response.data.message);
     console.log(error)
      
    }

  }
};
// Get All  Posts  

export  function getAllPosts(pageNumber) {
  return async(dispatch)=>{
   try {
     const {data} =await request.get(`/api/posts`)
     dispatch(postAction.setPosts(data))

   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};
 // Get Posts Based Count

 export  function getPostCount(pageNumber) {
  return async(dispatch)=>{
   try {
     const {data} =await request.get(`/api/posts/count`)
     dispatch(postAction.setPostsCount(data))
 
   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};
 
// Fetch Posts Based On Category

export  function fetchPostsBasedOnCategory(category) {
 return async(dispatch)=>{
  try {
    const {data} =await request.get(`/api/posts?category=${category}`)
    dispatch(postAction.setPostsCat(data))

  } catch (error) {
    toast.error(error.response.data.message);
   console.log(error)
    
  }

}
};

// Create Post
export function createPost(newPost) {
  return async (dispatch, getState) => {
    try {
      dispatch(postAction.setLoading());
      await request.post(`/api/posts`, newPost, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data"  
        }
      });
      dispatch(postAction.setIsPostCreated( ));
      setTimeout(() => {dispatch(postAction.clearIsPostCreated())},2000 ); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postAction.clearLoading())
      console.log(error);
    }
  };
}



// Fetch Single Post 

export  function fetchSinglePost(postId) {
  return async(dispatch)=>{
   try {
     const {data} =await request.get(`/api/posts/${postId}`)
     dispatch(postAction.setPost(data))

   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};



// Toggle Like Post 

export  function toggleLikePost(postId) {
  return async(dispatch,getState)=>{
   try {
     const {data} =await request.put(`/api/posts/like/${postId}`,{},{
      headers: {
        Authorization: "Bearer " + getState().auth.user.token,
   
      }
     })
     dispatch(postAction.setLike(data))

   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};

// Ubdate Like Post Image

export  function ubdatePostImage(newIamge , postId) {
  return async(dispatch,getState)=>{
   try {
     await request.put(`/api/posts/update-image/${postId}`,newIamge,{
      headers: {
        Authorization: "Bearer " + getState().auth.user.token,
        "Content-Type":"multipart/form-data"
   
      }
     })
     toast.success("New Post Image Uploaded Successfully");

   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};



// Ubdate Post 

export  function ubdatePost(newPost, postId) {
  return async(dispatch,getState)=>{
   try {
    const {data}= await request.put(`/api/posts/${postId}`,newPost,{
      headers: {
        Authorization: "Bearer " + getState().auth.user.token,
     
   
      }
     })
      dispatch(postAction.setPost(data))

   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};



// Delete Post 

export  function deletePost( postId) {
  return async(dispatch,getState)=>{
   try {
    const {data}= await request.delete(`/api/posts/${postId}`,{
      headers: {
        Authorization: "Bearer " + getState().auth.user.token,
   
      }
     })
      dispatch(postAction.deletePost(data.postId))
      toast.success(data.message);
   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};
