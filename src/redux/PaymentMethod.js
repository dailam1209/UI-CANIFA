import { createSlice } from '@reduxjs/toolkit';


const paymentSlice = createSlice ({
    name: "payment",
    initialState: {
        payment: ''
    },
    reducers: {
        changeMethodPayment: (state, action) => {
            state.payment = action.payload;

        }
    }
})


export const { changeMethodPayment } = paymentSlice.actions;
export default paymentSlice.reducer;