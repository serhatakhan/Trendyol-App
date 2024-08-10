import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/requests';
import {LOGIN_URL} from '../../service/urls';

export interface LoginResponse {
  token: string;
}

const loginUser = createAsyncThunk<LoginResponse, object>(
  'auth/loginUser',
  async (params: object, {rejectWithValue}) => {
    try {
      const res = await postRequest<LoginResponse>(LOGIN_URL, params);
      return res.data;
    } catch (error) {
      return rejectWithValue({error: (error as Error).message});
    }
  },
);

export {loginUser};
