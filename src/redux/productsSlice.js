import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items:null,
    totalItems: null,
    categoryItems: null,
    nameItems: null,
    barCodeItems: null
  },
  reducers:{
      addItems: (state, action)=>{
         state.items = action.payload;
      },
      addTotalItems:(state, action)=>{
        state.totalItems = action.payload;
      },  
  }
});

export default productsSlice.reducer;
export const{addItems,addTotalItems,addNameItems,addCategoryItems,addBarcodeItems} = productsSlice.actions;                     