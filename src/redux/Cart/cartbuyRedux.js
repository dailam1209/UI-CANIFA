import { createSlice } from '@reduxjs/toolkit';

const amountTotal = (products) => {
    let total = 0;
    products.map((_, index) => {
        console.log(typeof _?.inforproduct[0]?.price !== undefined ? _?.inforproduct[0]?.price : _?.inforproduct?.price);
        total = total +  (_.quantity * (_?.inforproduct[0]?.price !== undefined ? _?.inforproduct[0]?.price : _?.inforproduct?.price))
        
    })
    // console.log("total", total);
    return total;
}

const amountStock = (products) => {
    let stock = 0;
    products.map((_, index) => {
        stock = stock + (Number(_?.quantity) * Number(_?.inforproduct[0]?.price) * Number(_?.inforproduct[0]?.stock))/100
        
    })
    
    return stock;
}

const updateProductLocalStorage = (state) => {
    localStorage.setItem("shop/user-current",JSON.stringify(state));

}

const cartBuySlice = createSlice ({
    name: "productbuy",
    initialState: {
        productbuy: [],
        amount: 0,
        stock: 0,
       
    },
    reducers: {
        addBuyProduct(state, action) {
            const itemInCart = state.productbuy.find((item) => item.id === action.payload.id && item.src === action.payload.src && item.size === action.payload.size);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.productbuy.push({...action.payload});
            }
            
            state.amount = amountTotal(state.productbuy)
            state.stock  = amountStock(state.productbuy)
            updateProductLocalStorage(state.productbuy)
            


        },
        incProduct(state, action) {
            const exist = state.productbuy.find((item) => item.id === action.payload[0].id && item.src === action.payload[0].src && item.size === action.payload[0].size);
            if(exist) {
                exist.quantity = exist.quantity + 1;
            }
            state.amount = amountTotal(state.productbuy);
            state.stock  = amountStock(state.productbuy)
            updateProductLocalStorage(state.productbuy)
        },
        decProduct(state, action) {
            const exist = state.productbuy.find((item) => item.id === action.payload[0].id && item.src === action.payload[0].src && item.size === action.payload[0].size);
            if(exist) {
                if (exist.quantity > 1) {
                    exist.quantity--;
                }
                else {
                    state.productbuy.map((x,index) => (
                        x.index = index)
                        )
                    state.productbuy.splice(action.payload[0].index, 1);
                }
            }
            state.amount = amountTotal(state.productbuy)
            state.stock  = amountStock(state.productbuy)
            updateProductLocalStorage(state.productbuy)
        },
        removeItem(state, action) {
            state.productbuy.map((x,index) => (
                x.index = index)
                )
            if(state.productbuy.length === 1) {
                state.productbuy = [];
            }
            state.productbuy.splice(action.payload[0].index, 1);
            state.productbuy =  state.productbuy;
            state.amount = amountTotal(state.productbuy)
            state.stock  = amountStock(state.productbuy)
            updateProductLocalStorage(state.productbuy)
        },
        addCart(state, action) {
            state.productbuy = action.payload;
            updateProductLocalStorage(state.productbuy)
        },
        removeAllCart(state, action) {
            state.productbuy = action.payload;
            updateProductLocalStorage(action.payload)
        },
    }
});



export const { addBuyProduct, incProduct, decProduct, removeItem,addCart, removeAllCart } = cartBuySlice.actions;

export default cartBuySlice.reducer;
