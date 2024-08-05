import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type NavMobile = {
  isOpen: boolean
}

const initialState: NavMobile = {
  isOpen: false
}

const NavMobileSlice = createSlice({
  name: 'navMobile',
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { setIsOpen } = NavMobileSlice.actions
export default NavMobileSlice.reducer
