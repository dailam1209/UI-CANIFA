import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

// all product 
export const fetchAllProduct = createAsyncThunk(
  'product/AllProductApi',
  async (thunkApi) => {
    try {
      return await productService.getAllProduct();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// list product same code
export const fetchSameProduct = createAsyncThunk(
  'product/listSameProductApi',
  async (code) => {
    try {
      return await productService.getSameProducts(code);
    } catch (error) {
      return code.rejectWithValue(error);
    }
  }
);


// a product with id
export const fetchAProduct = createAsyncThunk(
  'product/productApi',
  async (thunkApi) => {
    try {
      return await productService.getAProduct();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const ressetProduct = createAsyncThunk(
  'product/productClear',
  async (thunkApi) => {
    try {
      let arrayProduct = [];
      return arrayProduct;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  'product/productAdd',
  async (product) => {
    try {
      return productService.addProducts(product);
    } catch (error) {
      return product.rejectWithValue(error);
    }
  }
);

export const fetchTitleSearch = createAsyncThunk(
  'product/productTitle',
  async (title) => {
    try {
      return await productService.getFilterProductsText(title);
    } catch (error) {
      return title.rejectWithValue(error);
    }
  }
);

export const fetchFilterAllProduct = createAsyncThunk(
  'product/productTitle',
  async ({title}) => {
    try {
      return await productService.getFilterAllProduct(title.color, title.size, title.price);
    } catch (error) {
      return title.rejectWithValue(error);
    }
  }
);

export const sort = createAsyncThunk(
  'product/sort',
  async (product) => {
    try {
      return product
    } catch (error) {
      return product.rejectWithValue(error);
    }
  }
);





const productSlice = createSlice({
  name: "product",
  initialState: {
    isError: false,
    isLoading: false,
    isSuccess: false,
    product: [],
    message: "",
    textSearch: ""
    
  },
  reducers: {
  },
  extraReducers:  (builder) =>  {
    builder

    // reset product
    .addCase(ressetProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(ressetProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload;
    })
    // get all product
    .addCase(fetchAllProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload?.allproduct;
    })
    .addCase(fetchAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
    })
    //  get same list product
    .addCase(fetchSameProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchSameProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload.productCode;
    })
    .addCase(fetchSameProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
    })

    // add Product
    .addCase(addProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload;
    })
    .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
    })
    // get a product
    .addCase(fetchAProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchAProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload;
    })
    .addCase(fetchAProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
    })

    // filter productAll 
    .addCase(fetchFilterAllProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchFilterAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product= action.payload.reductProduct;
    })
    .addCase(fetchFilterAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
  })

  //sort
  .addCase(sort.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isError = false;
    state.isSuccess = true;
    state.product= [...action.payload].reverse();;
  })
    
  },
});

export default productSlice;