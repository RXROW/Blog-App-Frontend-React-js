import { postAction } from "../slices/postSlice";
import request from "../../utils/request";
import {toast} from 'react-toastify' 

//Create Comment
 export  function createComment(newComment) {
   return async(dispatch , getState)=>{
    try {
      const {data} =await request.post("/api/comments" , newComment,{
        headers:{
          Authorization: "Bearer " + getState().auth.user.token,
        }
    })
      dispatch(postAction.addCommentToPost(data)) 
    } catch (error) {
      toast.error(error.response.data.message);
     console.log(error)
      
    }

  }
};


//Update Comment
export  function deleteCommment(commentId ) {
  return async(dispatch , getState)=>{
   try {
         await request.delete(`/api/comments/${commentId}`  , {
       headers:{
         Authorization: "Bearer " + getState().auth.user.token,
       }
   })
     dispatch(postAction.deleteCommentPost(commentId)) 
   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};

 
// Delete comment
export  function updateComment(commentId , comment) {
  return async(dispatch , getState)=>{
   try {
     const {data} =await request.put(`/api/comments/${commentId}` ,comment , {
       headers:{
         Authorization: "Bearer " + getState().auth.user.token,
       }
   })
     dispatch(postAction.updateCommentPost(data)) 
   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};

 
 
