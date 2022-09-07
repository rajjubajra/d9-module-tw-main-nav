import { configureStore } from '@reduxjs/toolkit';
import loginuserReducer from './loginSlice';


export default configureStore({
  reducer: {
    login_user:loginuserReducer
  }
})