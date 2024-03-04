import {createSlice} from "@reduxjs/toolkit"
const ProfileSlice= createSlice({
  name:"profile",
  initialState:{
    profile:null,
   
  },
  reducers:{
    setProfile(state,action){
      state.profile = action.payload;

    },
   setProfilePhoto(state,action){
      state.profile.profilePhoto = action.payload;
      
    },
   updateProfile(state,action){
    state.profile = action.payload;
    
  }
  }
});

const ProfileReducer=ProfileSlice.reducer;
const ProfileAction=ProfileSlice.actions;
export {ProfileReducer,ProfileAction}
