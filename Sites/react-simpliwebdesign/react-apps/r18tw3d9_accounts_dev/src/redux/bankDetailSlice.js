import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseurl} from '../config/baseurl';




const url = `${baseurl.URL}/jsonapi/node/bank_account_details`;

const initialState = {
  loading_bank: false,
  bank: [],
  error_bank: '',
}


//Generate pending, fulfilled, and rejected action types
export const bankData = createAsyncThunk("bank_detail/bankDetail", async () => {
  const response = await axios
    .get(url);
  return response.data;
})


const dataSlice = createSlice({
  name: 'bank_detail', 
  initialState,
  
  extraReducers: (builder) => {
    console.log("builder",builder)
    builder.addCase(bankData.pending, (state)=> {
        state.loading_bank = true
    })
    builder.addCase(bankData.fulfilled, (state, action)=>{
      //console.log(state, action)
      state.loading_bank = false
      state.bank = action.payload
      state.error_bank = ''
    })
    builder.addCase(bankData.rejected,(state, action)=>{
      state.loading_bank = false
      state.bank = []
      state.error_bank = action.error.message
    })
  },
})

export default dataSlice.reducer