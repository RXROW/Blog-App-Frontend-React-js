import {createSlice} from "@reduxjs/toolkit"
const postSlice= createSlice({
  name:"post",
  initialState:{
    posts:[],
    postsCount:null,
    postsCat:[],

 
   
  },
  reducers:{
    setPosts(state , actions){
      state.posts=actions.payload;
    },
    setPostsCount(state , actions){
      state.postsCount=actions.payload;
    },
    setPostsCat(state , actions){
      state.postsCat=actions.payload;
    }
 
 
 
  }
});

const postReducer=postSlice.reducer;
const postAction=postSlice.actions;
export {postReducer,postAction}
