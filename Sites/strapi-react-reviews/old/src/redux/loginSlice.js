import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';



export const actionLogin = createAsyncThunk("login_user/getLoginUser", 
async ({username, password}) => {
  
  //console.log(username, password);

    return await axios({
        method: 'POST',
        url: 'http://localhost:1337/api/auth/local',
        data: {
          "identifier": username,
          "password": password
        }
      })
      .then(response => response )
      .catch(err => console.log(err))
})
    


const loginSlice = createSlice({
  name: 'login_user',
  initialState:{
    loginData: '',
    loading: false,
    jwttoken: '',
    status: false,
    loginuser: '',
    loginemail: ''
  },


  extraReducers:{
    [actionLogin.pending]: (state) => {
      state.loading = true;
    },
    [actionLogin.fulfilled]: (state,action) => {
      console.log(action);
      state.loading = false;
      state.loginData = action.payload;
      state.jwttoken = action.payload.data.jwt;
      state.loginuser = action.payload.data.user.username;
      state.loginemail = action.payload.data.user.email;
      state.status = true;
    },
    [actionLogin.rejected]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.status = false;
    },
  },
})

//Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default loginSlice.reducer