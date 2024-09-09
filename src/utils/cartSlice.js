import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem:(state,action)=>{
      const index=state.items.findIndex((item)=>item.id===action.payload)
      if(index!==-1){
        state.items.splice(index,1)
      }
    },
    // removeItem: (state, action) => {
    //   const index = state.items.findIndex((item) => item.id === action.payload);
    //   if (index !== -1) {
    //     state.items.splice(index, 1); // Remove only the first occurrence
    //   }
    // },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
