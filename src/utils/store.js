import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store=configureStore({
reducer:{
    cart:cartSlice
}

})
export default store;

/** 
 * create store
 * configurestore()-RTK
 * Provide my store to app by using Provider component the key was store
 * Slice
 * -RTK
 *    name:""
 *     initialState:""
 *     reducers:{
 *      addIem:(state,action)=>{}we ca directly modify state here
 *           }
 * export const{addIem,removeItem}=cartSlice.actions
 * export default cartSlice.reducer
 * 
 * put that slice into store
 * {
 * reducer:{
 *      cart:cartSlice
 *            user:userSlice
 * 
 *          }
 * 
 * }                                                                                                                                                      
 * **/
