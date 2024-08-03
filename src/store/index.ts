import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import categoriesReducer from './slice/categoriesSlice';
import cartsReducer from './slice/cartsSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoriesReducer,
    carts: cartsReducer,
  },
});

// AppDispatch, store'un dispatch türüdür ve bu, dispatch'i doğru şekilde tip güvenli hale getirmek için kullanılır.
export type AppDispatch = typeof store.dispatch;
// RootState, Redux store'unuzun state ağacının tümünü temsil eden türdür.
export type RootState = ReturnType<typeof store.getState>;

/**
 * ReturnType, TypeScript'in bir tür yardımıdır (type helper). Bir fonksiyonun dönüş değerinin türünü elde etmenizi sağlar.
 * store.getState() fonksiyonu, Redux store'un mevcut durumunu (state) döner. Bu fonksiyon, store'un tüm durum ağacını içeren bir nesne döndürür.
 * typeof anahtar kelimesi, bir değişkenin veya bir fonksiyonun türünü almanıza olanak tanır. Burada typeof store.getState ifadesi, store.getState fonksiyonunun türünü alır.
 */
