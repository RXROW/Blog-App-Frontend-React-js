import {createSlice} from "@reduxjs/toolkit"
const authSlice= createSlice({
  name:"auth",
  initialState:{
    user:localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo") ) : null
  },
  reducers:{
    Login(state ,action){
      state.user =action.payload
    },
    Logout(state ){
      state.user=null;
    },
    setUserPhoto(state,action ){
     state.user.profilePoto = action.payload;
    },
    setUsername(state,action ){
     state.user.username = action.payload;

    }
  }
});

const authReducer=authSlice.reducer;
const authAction=authSlice.actions;
export {authReducer,authAction}
