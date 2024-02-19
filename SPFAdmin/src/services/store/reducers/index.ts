import { combineReducers } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import lookupReducer from './LookupSlice'

const rootReducer = combineReducers({
  auth: AuthSlice,
  lookup: lookupReducer
});

export default rootReducer;
