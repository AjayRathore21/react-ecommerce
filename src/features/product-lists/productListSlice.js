import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductByFilters,
  fetchBrands,
  fetchCatories,
  fetchProductById,
} from "./productListApi";

const initialState = {
  products: [],
  status: "idle",
  categories: [],
  brands: [],
  totalItems: 0,
  selectedProduct: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductByFiltersAsync = createAsyncThunk(
  "product/fetchProductByFilters",
  async ({ filter, sort, pagination }) => {
    // agr 2 agr send krni h to obj bnaa k send krna remamber
    const response = await fetchProductByFilters(filter, sort, pagination);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchBrands",
  async () => {
    const response = await fetchBrands();

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchCatoriesAsync = createAsyncThunk(
  "product/fetchCatories",
  async () => {
    const response = await fetchCatories();

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";

        state.products = action.payload;
      })
      .addCase(fetchProductByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";

        // console.log("add cass", action.payload);
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchCatoriesAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCatoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchBrandsAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(fetchAllProductByIdAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProduct = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectProductById = (state)=>state.product.selectedProduct;
export const selectCategories = (state) => state.product.categories;
export const selectTotalItems = (state) => state.product.totalItems;
export default productSlice.reducer;
