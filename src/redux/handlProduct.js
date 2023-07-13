import { createSlice } from '@reduxjs/toolkit';

const handleSlice = createSlice ({
    name: "incordec",
    initialState: {
        product: [],
    },
    reducers: {
        incProduct: (state, {payload}) => {
            console.log(state);
            console.log(payload);
            return state.map((item) =>
                item.id === payload
                ? {
                    ...item,
                    quantity: item.quantity + 1
                    }
                : item
            );    
        }
    }

});

export const { incProduct } = handleSlice.actions;
export default handleSlice.reducer;
