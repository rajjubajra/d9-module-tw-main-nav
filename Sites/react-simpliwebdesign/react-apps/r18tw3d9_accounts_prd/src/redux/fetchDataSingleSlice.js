import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseurl} from '../config/baseurl';

const initialState = {
  loading_data: false,
  data: [],
  included: [],
  error_data: null,
}

//Generate pending, fulfilled, and rejected action types
export const fetchDataSingle = createAsyncThunk("data_single/fetchDataSingle", ({id}) => {

  console.log("UUID Slice: ", id);

    const url = `${baseurl.URL}/jsonapi/node/invoice/${id}?include=field_bank_account,field_client_id_invoice,field_invoice_details`;

  console.log("URL Slice ? - ", url);

    return axios({
      method: "GET",
      url: url,
    })
    .then(response => response.data)
    .catch(err => console.log(err))

});


const dataSlice = createSlice({
  name: 'data_single', 
  initialState,

  extraReducers: (builder) => {
    console.log("builder",builder)
    builder.addCase(fetchDataSingle.pending, (state)=> {
        state.loading = true
    })
    builder.addCase(fetchDataSingle.fulfilled, (state, action)=>{
      //console.log("ACTION PAYLOAD : ",state, action.payload)
      state.loading = false
      state.data = action.payload.data
      state.included = action.payload.included
      state.error = ''
    })
    builder.addCase(fetchDataSingle.rejected,(state, action)=>{
      state.loading = false
      state.data = []
      state.included = []
      state.error = action.error.message
    })
  },
})

export default dataSlice.reducer