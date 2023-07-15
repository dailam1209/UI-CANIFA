import { createSlice } from '@reduxjs/toolkit';


const colorsSlice = createSlice ({
    name: "colors",
    initialState: {
        colors: []
    },
    reducers: {
        changeColor: (state, action) => {
            state.colors = action.payload;
        },
        
    }
})


export const { changeColor } = colorsSlice.actions;
export default colorsSlice.reducer;