import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  authType: 'login' | 'register'
}

const initialState: AuthState = {
  authType: 'register'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthType: (state, action: PayloadAction<AuthState['authType']>) => {
      state.authType = action.payload
    },
    toggleAuthType: (state) => {
      state.authType = state.authType === 'register' ? 'login' : 'register'
    }
  }
})

export const { setAuthType, toggleAuthType } = authSlice.actions
export default authSlice.reducer
