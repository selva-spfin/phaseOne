// profilesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiBaseUrl } from '../../../services/helpers/PartnerService';

interface ProfileStatus {
  Profile_Status_Id: number;
  Status_Name: string;
}

interface ProfilesState {
  statusList: ProfileStatus[];
}

const initialState: ProfilesState = {
  statusList: [],
};

// Define an asynchronous thunk to fetch the profile status list
export const fetchProfileStatusList = createAsyncThunk(
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

const lookupSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileStatusList.fulfilled, (state, action) => {
      state.statusList = action.payload;
    });
  },
});

export { fetchProfileStatusList };

export const selectProfileStatusList = (state: { lookup: ProfilesState }) =>  state.lookup?.statusList

export default lookupSlice.reducer;
