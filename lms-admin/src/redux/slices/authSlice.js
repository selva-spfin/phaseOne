import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  authData: [],
  loading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: 'loginAuth',
  initialState,
  reducers: {
    setAuthList: (state, action) => {
      state.authData = action.payload;
    },
    // Action to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Action to set error state
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setAuthList,
  setLoading,
  setError,
} = AuthSlice.actions;

// export const loginAuthData = (state) => state.auth.authData;
// export const selectLoading = (state) => state.auth.loading;
// export const selectError = (state) => state.auth.error;

export default AuthSlice.reducer;
