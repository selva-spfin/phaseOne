import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  bankData: [],
  loanProcessStatusData: [],
  loanTypeData: [],
  profileStatusData: [],
  userRoleData: [],





};

const LookupSlice = createSlice({
  name: 'Lookup',
  initialState,
  reducers: {
    setBankList: (state, action) => {
      state.bankData = action.payload;
    },
    setLoanStatusList: (state, action) => {
      state.loanProcessStatusData = action.payload;
    },
    setLoanTypeList: (state, action) => {
      state.loanTypeData = action.payload;
    },
    setProfileStatusList: (state, action) => {
      state.profileStatusData = action.payload;
    },
    setUserRoleList: (state, action) => {
      state.userRoleData = action.payload;
    },

  },
});

export const {
  setBankList,
  setLoanStatusList,
  setLoanTypeList,
  setProfileStatusList,
  setUserRoleList,
} = LookupSlice.actions;



export default LookupSlice.reducer;
