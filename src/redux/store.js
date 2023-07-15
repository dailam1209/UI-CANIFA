import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/fetchUserApi";
import reviewRedux from "./reviewRedux";
import cartbuyRedux from "./Cart/cartbuyRedux";
import PaymentMethod from "./PaymentMethod";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import productSlice from "./product/fetchProductApi";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import wishListRedux from "./WishList/wishListRedux";
import inforCheckoutRedux from "./inforCheckoutRedux";
import colors from "./colors";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userSlice.reducer,
    review: reviewRedux,
    cart: cartbuyRedux,
    wishlist: wishListRedux,
    product : productSlice.reducer,
    payment : PaymentMethod,
    checkout: inforCheckoutRedux,
    colors: colors
});

const persistedreducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedreducer,
    middleware: [thunk],
})

export let persistor = persistStore(store);