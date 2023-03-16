import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseurl} from '../config/baseurl'


const initialState = {
  loading_data: false,
  data: [],
  error_data: null,
}

//Generate pending, fulfilled, and rejected action types
export const fetchData = createAsyncThunk("data/fetchData", (startdate, enddate) => {


  console.log("Data fetch slice", startdate, enddate);
  
  let url = `${baseurl.URL}/jsonapi/node/invoice/?include=field_bank_account,field_client_id_invoice,field_invoice_details`;

  return axios({
    method: "GET",
    url: url,
  })
  .then(response =>  {
    console.log(response)
    return response.data
  })
  .catch(err => console.log("Axios GET Error: ",err))
  
});

const dataSlice = createSlice({
  name: 'data', 
  initialState,
  
  extraReducers: (builder) => {
    console.log("builder",builder)
    builder.addCase(fetchData.pending, (state)=> {
        state.loading = true
    })
    builder.addCase(fetchData.fulfilled, (state, action)=>{
      console.log("SLICE DATA : ", action.payload)
      state.loading = false
      state.data = action.payload
      state.error = ''
    })
    builder.addCase(fetchData.rejected,(state, action)=>{
      state.loading = false
      state.data = []
      state.error = action.error.message
    })
  },
})

export default dataSlice.reducer