import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    user: {
        email: string;
        id: string;
    };
}

const initialState: CounterState = {
  user: {
    email: '',
    id: '',
  },
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<CounterState>) => {
        state.user = action.payload.user;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo } = counterSlice.actions

export default counterSlice.reducer