import { createSlice } from '@reduxjs/toolkit';


const checkoutSlice = createSlice ({
    name: "payment",
    initialState: {
        username: '',
        phone: '',
        province: '',
        distric: '',
        ward: '',
        address: '',
        noteAddress:'',
        number: ''
    },
    reducers: {
        UserCheckout: (state, action) => {
            state.username = action.payload;
        },
        PhoneCheckout: (state, action) => {
            state.phone = action.payload;
        },
        ProvinceCheckout: (state, action) => {
            state.province = action.payload;
        },
        DistricCheckout: (state, action) => {
            state.distric = action.payload;
        },
        WardCheckout: (state, action) => {
            state.ward = action.payload;
        },
        AddressCheckout: (state, action) => {
            state.address = action.payload;
        },
        NoteAddressCheckout: (state, action) => {
            state.noteAddress = action.payload;
        },
        Number: (state, action) => {
            state.number = action.payload;
        }
    }
})


export const { UserCheckout, PhoneCheckout, ProvinceCheckout, DistricCheckout, WardCheckout, AddressCheckout, NoteAddressCheckout, Number } = checkoutSlice.actions;
export default checkoutSlice.reducer;