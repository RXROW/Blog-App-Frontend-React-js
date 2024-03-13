
import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice";
import {  ProfileReducer } from "./slices/prfileSlice";
import { postReducer } from "./slices/postSlice";
import { categoryReducer } from "./slices/categorySlice";
const store =configureStore({
  reducer:{
    auth:authReducer,
    profile:ProfileReducer,
    posts:postReducer,
    category:categoryReducer,


  }

});
export default store;