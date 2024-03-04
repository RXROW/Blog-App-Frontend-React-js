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


