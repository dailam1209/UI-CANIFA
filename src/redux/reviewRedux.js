import { createSlice } from '@reduxjs/toolkit';


const reviewSlice = createSlice ({
    name: "review",
    initialState: {
        product: [],
    },
    reducers: {
        productView: (state, action) => {
            state.product = action.payload;

        }
    }
})


export const { productView } = reviewSlice.actions;
export default reviewSlice.reducer;