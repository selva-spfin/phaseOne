import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoggedIn:(state)=>{
      state.isAuthenticated = true;
    },
    adminLogin: (state, action: PayloadAction<{ id: string; username: string }>) => {
      state.isAuthenticated = true;
      state.user = {
        id: action.payload.id,
        username: action.payload.username,
      };
    },
    adminLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { adminLogin, adminLogout, isLoggedIn } = authSlice.actions;

export default authSlice.reducer;
