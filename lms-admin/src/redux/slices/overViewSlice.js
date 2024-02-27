import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  setTarget: "",
  approvedLead: "",
  completeTarget: "",
  leadStatus: [],
  leadRatio: []
};

const overViewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    setTargetVal: (state, action) => {
      state.setTarget = action.payload;
    },
    setApprovedLead: (state, action) => {
      state.approvedLead = action.payload;
    },
    setCompleteTarget: (state, action) => {
      state.completeTarget = action.payload;
    },
    setLeadStatus: (state, action) => {
      state.leadStatus = action.payload;
    },
    setLeadRatio: (state, action) => {
      state.leadRatio = action.payload;
    },
    resetStates:(state)=>{
      state = initialState;
    }

  },
});

export const {
  setTargetVal,
  setApprovedLead,
  setCompleteTarget,
  setLeadStatus,
  setLeadRatio,
  resetStates
} = overViewSlice.actions;



export default overViewSlice.reducer;
