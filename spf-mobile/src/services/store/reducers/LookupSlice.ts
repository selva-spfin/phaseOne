import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiBaseUrl } from '../../../services/helpers/PartnerService';

interface Bank {
  Bank_ID: number;
  Bank_Name: string;
}

interface ProfilesState {
  statusList: ProfileStatus[];
  bankList: Bank[];
}

const initialState: ProfilesState = {
  statusList: [],
  bankList: [],
};

const fetchProfileStatusList = createAsyncThunk(
  'profiles/fetchProfileStatusList',
  async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/lookup?type=profile_status`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile status list');
      }

      const data = await response.json();
      return data as ProfileStatus[];
    } catch (error) {
      throw error;
    }
  }
);

const fetchBankList = createAsyncThunk(
  'profiles/fetchBankList',
  async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/lookup?type=bank`);
      if (!response.ok) {
        throw new Error('Failed to fetch bank list');
      }

      const data = await response.json();
      return data as Bank[];
    } catch (error) {
      throw error;
    }
  }
);

const lookupSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileStatusList.fulfilled, (state, action) => {
      state.statusList = action.payload;
    });

    builder.addCase(fetchBankList.fulfilled, (state, action) => {
      state.bankList = action.payload;
    });
  },
});

export { fetchProfileStatusList, fetchBankList };

export const selectProfileStatusList = (state: { lookup: ProfilesState }) => state.lookup?.statusList;
export const selectBankList = (state: { lookup: ProfilesState }) => state.lookup?.bankList;

export default lookupSlice.reducer;
