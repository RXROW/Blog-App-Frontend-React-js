import {createSlice} from "@reduxjs/toolkit"
const postSlice= createSlice({
  name:"post",
  initialState:{
    posts:[],
    postsCount:null,
    postsCat:[],
    loading:false,
    isPostCreated:false,
    post:null,

    

 
   
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
    },
    setLoading(state){
      state.loading=true;
    },  
    clearLoading(state){
      state.loading=false;
    },
    setIsPostCreated(state){
      state.isPostCreated=true;
      state.loading=false;

    },
    clearIsPostCreated(state){
      state.isPostCreated=false;
    },
    setPost(state,actions){
      state.post=actions.payload;
    },
    setLike(state,actions){
    state.post.likes=actions.payload.likes;
    },
    deletePost(state,actions){
    state.posts=actions.posts.filter(p=>p._id !== actions.payload);
    }




 
 
 
  }
});

const postReducer=postSlice.reducer;
const postAction=postSlice.actions;
export {postReducer,postAction}
