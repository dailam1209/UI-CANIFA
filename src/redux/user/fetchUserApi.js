import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const updateUserLocalStorage = (state) => {
    localStorage.setItem("userShop",JSON.stringify(state));

}

export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (infor) => {
        try {
            return await userService.register(infor);
        }catch (error) {
            return Error(error);
        } 
    }
);

export const fetchLogin =  createAsyncThunk(
    'auth/login',
    async (infor) => {
        try {
            return await userService.login(infor);
        } catch (error) {
            return Error(error);
        }
    }
)

export const fetchLogout =  createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await userService.logout();
        } catch (error) {
            return Error(error);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        userInfor: null,
        userToken: null,
        isSuccess: false
    },
    reducers: {
        clearUser(state, action) {
            state.isLoading = false;
            state.userInfor = action.payload;
            state.userToken = action.payload;
            state.isSuccess = false;
            updateUserLocalStorage(state.user)
        }
    },
    extraReducers: (builder) => {
        builder

        // register
        .addCase(fetchRegister.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchRegister.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(fetchRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
        })

        // login
        .addCase(fetchLogin.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfor = action.payload.user;
            state.isSuccess = action.payload.success;
            state.userToken = action.payload.token;
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
        })

    }
});
export const { clearUser } = userSlice.actions;
export default userSlice;