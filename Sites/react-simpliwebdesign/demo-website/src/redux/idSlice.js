import {createSlice} from '@reduxjs/toolkit';


const initialState  = {
  uuid: 0
}

export const uuidSlice = createSlice({

  name: 'uuidSlice',
  
  initialState,
  reducers: {
    payloadId: (state, action) => {
      state.uuid = action.payload;
      console.log(action.payload)
    }
  }

})

export const { uuidslice } = uuidSlice.actions
export default uuidSlice.reducer