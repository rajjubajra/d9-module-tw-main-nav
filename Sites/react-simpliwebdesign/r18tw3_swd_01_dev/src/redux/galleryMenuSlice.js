import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';


export const actionGalleryMenu = createAsyncThunk("gallery_menu/getGalleryMenu", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/jsonapi/menu_items/yw---theme-gallery-menu`,
    headers: {
      'Content-Type': 'application/vnd.api+json'
    }
  }).then(response => response.data).catch(err => { console.error(err)})
})


const galleryMenuSlice = createSlice({
  name: 'gallery_menu',
  initialState:{
    gallerymenu: [],
    loading: false,
    fetched: false,
    localhost: window.location.origin === 'http://localhost:3000' ? true : false,
  },

  extraReducers:{
    [actionGalleryMenu.pending]: (state) => {
      state.loading = true;
    },
    [actionGalleryMenu.fulfilled]: (state,action) => {
      state.loading = false;
      state.gallerymenu = action.payload.data;
      state.fetched = true;
    },
    [actionGalleryMenu.rejected]: (state) => {
      state.loading = false;
      state.fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default galleryMenuSlice.reducer