import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items:null,
    totalItems: null,
    dataFetched: false,
  },
  reducers:{
      addItems: (state, action)=>{
         state.items = action.payload;
      },
      addTotalItems:(state, action)=>{
        state.totalItems = action.payload;
      },
      toggle:(state)=>{
        state.dataFetched = !state.dataFetched;
      }
  }
});

export default productsSlice.reducer;
export const{addItems,addTotalItems,toggle} = productsSlice.actions;                     