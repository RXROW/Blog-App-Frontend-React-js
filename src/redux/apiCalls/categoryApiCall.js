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

 
 
