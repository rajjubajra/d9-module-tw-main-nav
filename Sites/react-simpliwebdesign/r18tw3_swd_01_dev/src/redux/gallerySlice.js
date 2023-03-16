import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';




export const actionGallary = createAsyncThunk("gallery_list/getGallery", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/jsonapi/node/yw_gallery_list?include=field_yw_gallery_icon`,
    headers: {
      'Content-Type': 'application/vnd.api+json'
    }
  }).then(response => response.data).catch(err => { console.error(err)})
})


const gallerySlice = createSlice({
  name: 'gallery_list',
  initialState:{
    gallery: [],
    gallery_loading: false,
    gallery_fetched: false,
  },

  extraReducers:{
    [actionGallary.pending]: (state) => {
      state.gallery_loading = true;
    },
    [actionGallary.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.gallery_loading = false;
      state.gallery = action.payload;
      state.gallery_fetched = true;
    },
    [actionGallary.rejected]: (state) => {
      state.gallery_loading = false;
      state.gallery_fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default gallerySlice.reducer