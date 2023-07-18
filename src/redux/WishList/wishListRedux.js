import { createSlice } from '@reduxjs/toolkit';
import wishListService from './wishListService';
import { createAsyncThunk } from '@reduxjs/toolkit';


const updateWishListLocalStorage = (state) => {
    localStorage.setItem("wishlist/user-current",JSON.stringify(state));
}


// all 
export const fetchAllWishList = createAsyncThunk(
    'wishList/allWishList',
    async (userId, token) => {
      try {
        return await wishListService.getAllWishListIterm(userId, token);
      } catch (error) {
        return userId.rejectWithValue(error);
      }
    }
  );

const wishListSlice = createSlice ({
    name: "wishList",
    initialState: {
        wishList: [],
        isLoading: false,
        success: false
    },
    reducers: {
        changeWish(state, action) {
            if(action.payload === 'clear') {
                state.wishList = [];
            } else {
                console.log(action.payload[0].code);
                const isFound = state.wishList.findIndex((item) => item[0].code === action.payload[0].code);
                console.log(isFound, action.payload[0].code);
                if(isFound !== -1) {
                    
                    state.wishList.splice(state.wishList[isFound], 1);
                    // state.wishList =  state.wishList;
                } else {
                  
                    state.wishList.push([...action.payload]);
                }
            }
            
            updateWishListLocalStorage(state.wishList)
        },
        addWish(state, action) {
            state.wishList.push(...action.payload);
            updateWishListLocalStorage(state.wishList)
        },
       
            
    },
    extraReducers:  (builder) =>  {
        builder
        // get all 
        .addCase(fetchAllWishList.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(fetchAllWishList.fulfilled, (state, action) => {
          state.isLoading = false;
          state.wishList = action.payload?.flowCode;
          state.success = false;
        })
        .addCase(fetchAllWishList.rejected, (state, action) => {
            state.isLoading = false;
            state.success = true;
        })
        
        
      }
});



export const { changeWish, addWish } = wishListSlice.actions;

export default wishListSlice.reducer;
