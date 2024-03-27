import { categoryAction } from "../slices/categorySlice";
import request from "../../utils/request";
import {toast} from 'react-toastify' 
 
 

//  Fetch All Categories
 export  function fetchCategories(user) {
   return async(dispatch)=>{
    try {
      const {data} =await request.get("/api/categories")
      dispatch(categoryAction.setCategories(data)) 
    } catch (error) {
      toast.error(error.response.data.message);
     console.log(error)
      
    }

  }
};

// create Category
export  function createCategory(newCategory) {
  return async(dispatch ,getState)=>{
   try {
     const {data} =await request.post("/api/categories" ,newCategory,{
      headers: {
        Authorization: "Bearer " +  getState().auth.user.token,
   
      }

     })
     dispatch(categoryAction.addCategory(data)) 
     toast.success("Category Created Successfully ! ")
   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};



// Delete Category
export  function deleteCategory(categoryId) {
  return async(dispatch ,getState)=>{
   try {
     const {data} =await request.delete(`/api/categories/${categoryId}` ,{
      headers: {
        Authorization: "Bearer " + getState().auth.user.token,
   
      }

     })
     dispatch(categoryAction.deleteCategory(data.categoryId)) 
     toast.success(data.message)
   } catch (error) {
     toast.error(error.response.data.message);
    console.log(error)
     
   }

 }
};




 
 
