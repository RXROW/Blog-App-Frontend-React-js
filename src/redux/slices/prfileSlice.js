import {createSlice} from "@reduxjs/toolkit"
const ProfileSlice= createSlice({
  name:"profile",
  initialState:{
    profile:null,
    loading:false,
    usersCount:null,
    isProfileDeleted:false,
    profiles:[],

   
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
    
  },
  setLoading(state){
    state.loading=true
  }
  ,
  clearLoading(state){
    state.loading=false
  },  
  setIsProfileDeleted(state){
    state.isProfileDeleted=true
    state.loading=false

  },
  clearIsProfileDeleted(state){
    state.isProfileDeleted=false
  },
  setUsersCount(state ,action){
    state.usersCount = action.payload
  },
  setProfiles(state ,action){
    state.profiles = action.payload
  },
  }
});

const ProfileReducer=ProfileSlice.reducer;
const ProfileAction=ProfileSlice.actions;
export {ProfileReducer,ProfileAction}
