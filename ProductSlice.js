import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fix typo in function name: fetchProucts -> fetchProducts
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const final = await res.json();
    return final;
});

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,  // Fix typo: isErroe -> isError
    },

    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoader = true;  // Fix typo: ture -> true
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;  // Fix typo: isErroe -> isError
        });
    }
});

export default ProductSlice.reducer;
