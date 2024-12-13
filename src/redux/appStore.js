import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const appStore = configureStore({
       reducer: {
        products: productsReducer,
       }
});

export default appStore;