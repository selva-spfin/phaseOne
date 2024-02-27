import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import authScreen from './slices/authSlice';
import LookupSlice from './slices/lookup';
import OverViewSlice from './slices/overViewSlice';




import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { combineReducers, } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";


const encryptor = encryptTransform({
  secretKey: "101DDDJJNN@34444444~`T`+Tll",
  onError: function (error) {
    console.error("Encryption Error:", error);
  },
});


const persistConfig = {
  key: 'root67',
  version: 1,
  transforms: [encryptor],
  storage
}

const localStorageMiddleware = store => next => action => {
  const isLocalStorageEnabled = true

  if (isLocalStorageEnabled) {
    // Continue with the next middleware or the default action
    return next(action);
  }

  // Skip localStorage operations and just pass the action through
  const { type, ...actionWithoutType } = action;
  return next(actionWithoutType);
};

const rootReducer = combineReducers({

  customer: customerSlice,
  auth: authScreen,
  Lookup: LookupSlice,
  overView: OverViewSlice
})

const persitedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware)

})
