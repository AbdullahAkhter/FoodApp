import { configureStore } from "@reduxjs/toolkit";
import { cartreducer, reducer } from "./slices";
export const store=configureStore({
    reducer:{
        restaurant:reducer,
        cart:cartreducer
    }
})