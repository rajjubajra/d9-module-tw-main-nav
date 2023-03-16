import {configureStore} from '@reduxjs/toolkit';
import uuidReducer from './idSlice';

export const store = configureStore({
    reducer : {
      uuidSlice: uuidReducer
    }
})
