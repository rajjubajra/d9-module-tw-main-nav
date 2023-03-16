import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fiscal_year_start: "0000-00-00",
  fiscal_year_end: "0000-00-00",
}


export const fiscalYearSlice = createSlice({
  name: 'set_fiscalyear',
  initialState,
  reducers: {
    actionSetFiscalYear: (state, action) => {
      console.log("redux action", action.payload);
      state.fiscal_year_start = action.payload[0]
      state.fiscal_year_end = action.payload[1]
    }
  },
})

// Action creators are generated for each case reducer function
export const { actionSetFiscalYear } = fiscalYearSlice.actions

export default fiscalYearSlice.reducer