import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseurl} from '../config/baseurl';


const url = `${baseurl.URL}/jsonapi/node/client_details?include=field_client_id,field_client_s_city,field_client_s_country_name,field_client_s_post_code`;

const initialState = {
  loading_client: false,
  client: [],
  error_client: '',
}


//Generate pending, fulfilled, and rejected action types
export const clientData = createAsyncThunk("client_detail/clientDetail", (filter) => {
  
  console.log("FILTER: ",filter);

  let fetchdata = filter === null 
                  ? url 
                  : url + `&filter[clientname][condition][path]=field_client_s_name&filter[clientname][condition][operator]=STARTS_WITH&filter[clientname][condition][value]=${filter}`

return axios({
    method: 'GET',
    url: fetchdata
  })
  .then(response => response.data)
  .catch(error => console.log(error))
    
  
})


const dataSlice = createSlice({
  name: 'client_detail', 
  initialState,
  
  extraReducers: (builder) => {
    console.log("builder",builder)
    builder.addCase(clientData.pending, (state)=> {
        state.loading_client = true
    })
    builder.addCase(clientData.fulfilled, (state, action)=>{
      console.log(state, action)
      state.loading_client = false
      state.client = action.payload
      state.error_client = ''
    })
    builder.addCase(clientData.rejected,(state, action)=>{
      state.loading_client = false
      state.client = []
      state.error_client = action.error.message
    })
  },
})

export default dataSlice.reducer