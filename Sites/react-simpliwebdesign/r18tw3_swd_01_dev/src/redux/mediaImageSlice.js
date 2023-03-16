import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';



export const actionMediaImage = createAsyncThunk("media_image/getMediaImage", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/jsonapi/media/image?include=field_media_image&fields[media--image]=field_media_image`,
    headers: {
      'Content-Type': 'application/vnd.api+json'
    }
  }).then(response => response.data).catch(err => { console.error(err)})
})


const mediaImageSlice = createSlice({
  name: 'media_image',
  initialState:{
    mediaImage: [],
    mediaImage_loading: false,
    mediaImage_fetched: false,
  },

  extraReducers:{
    [actionMediaImage.pending]: (state) => {
      state.media_image = true;
    },
    [actionMediaImage.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.mediaImage_loading = false;
      state.mediaImage = action.payload;
      state.mediaImage_fetched = true;
    },
    [actionMediaImage.rejected]: (state) => {
      state.mediaImage_loading = false;
      state.mediaImage_fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default mediaImageSlice.reducer