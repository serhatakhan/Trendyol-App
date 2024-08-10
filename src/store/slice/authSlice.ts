import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {LoginResponse, loginUser} from '../actions/authActions';

interface AuthTypes {
  token: string;
  isLogin: boolean;
  pending: boolean;
  error: string | object;
}
const initialState: AuthTypes = {
  token: '',
  isLogin: false,
  pending: false,
  error: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.token = action.payload.token;
        state.pending = false;
        state.isLogin = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // action.error.message içinde hata mesajı bulunabilir
        state.error = action.error.message || 'Unknown error';
        state.pending = false;
      });
  },
});

export default authSlice.reducer;
