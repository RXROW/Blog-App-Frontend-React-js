
import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice";
import {  ProfileReducer } from "./slices/prfileSlice";
import { postReducer } from "./slices/postSlice";
const store =configureStore({
  reducer:{
    auth:authReducer,
    profile:ProfileReducer,
    posts:postReducer,


  }

});
export default store;