import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('user/singup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return console.error(error);
  }
});
export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('user/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return console.error(error);
  }
});
export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return console.error(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.userAuth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return console.error(error);
    }
  }
);
