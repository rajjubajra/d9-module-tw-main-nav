import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './fetchDataSlice';
import clilentReducer from './clientDetailSlice';
import bankReducer from './bankDetailSlice';
import dataSingleReducer from './fetchDataSingleSlice';
import fiscalYearReducer from './fiscalYearSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    client_detail: clilentReducer,
    bank_detail: bankReducer,
    data_single: dataSingleReducer,
    set_fiscalyear: fiscalYearReducer
  },
})