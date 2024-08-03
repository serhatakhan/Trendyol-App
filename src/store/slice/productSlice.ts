import {createSlice} from '@reduxjs/toolkit';
import {getBestSellerProducts, getNewArrivalProducts, getProducts} from '../actions/productActions';
import type {PayloadAction} from '@reduxjs/toolkit';

// ürünlerin tipi - Product arayüzü, bir ürünün sahip olması gereken özellikleri tanımlar.
export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: any
  rate?: number
}
// ürünlerin state'lerinin tipi
interface ProductState {
  products: Product[];
  newArrival: Product[];
  bestSeller: Product[];
  pending: boolean;
  error: string | object;
}
// initial state'e ürünlerin başlangıç durumunu tanımlar.
const initialState: ProductState = {
  products: [],
  newArrival: [],
  bestSeller: [],
  pending: false,
  error: {},
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeProduct: state=>{
      state.products = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.pending = false;
        },
      )
      .addCase(
        getProducts.rejected,
        (state, action: PayloadAction<{error: string} | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      )

      .addCase(getNewArrivalProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getNewArrivalProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.newArrival = action.payload;
          state.pending = false;
        },
      )
      .addCase(
        getNewArrivalProducts.rejected,
        (state, action: PayloadAction<{error: string} | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      )

      .addCase(getBestSellerProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getBestSellerProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.bestSeller = action.payload;
          state.pending = false;
        },
      )
      .addCase(
        getBestSellerProducts.rejected,
        (state, action: PayloadAction<{error: string} | undefined>) => {
          state.error = action.payload ? action.payload.error : 'Unknown error';
        },
      );
  },
});
/**
 * PayloadAction: Redux Toolkit'in tip güvenli eylem nesnelerini temsil etmek için kullandığı türdür. 
 * PayloadAction<T> şeklinde yazıldığında, T eylemin payload türünü belirtir. 
 * Bu durumda T, Product[] yani ürünlerin dizisidir.
 
 * PayloadAction<{ error: string } | undefined>
 * Eylemin payload türünü belirtir. Bu durumda, { error: string } | undefined yani bir hata mesajı içeren bir nesne ya da undefined'dır türü. 
 */
export const {removeProduct} = productSlice.actions;
export default productSlice.reducer;
