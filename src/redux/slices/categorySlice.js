import {createSlice} from "@reduxjs/toolkit"
const categorySlice= createSlice({
  name:"category",
  initialState:{
   categories:[],
    

 
   
  },
  reducers:{
    setCategories(state , actions){
      state.categories=actions.payload;
    },
 
 
 
  }
});

const categoryReducer=categorySlice.reducer;
const categoryAction=categorySlice.actions;
export {categoryReducer,categoryAction}
