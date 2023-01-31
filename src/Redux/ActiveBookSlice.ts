import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  activeBook: any
}

const initialState: CounterState = {
  activeBook: {},
}

export const activeBookSlice = createSlice({
  name: 'activeBook',
  initialState,
  reducers: {
    setBook: (state,action:PayloadAction<any>) => {
      state.activeBook = action.payload.book
    }
  },
})

export const {setBook} = activeBookSlice.actions

export default activeBookSlice.reducer