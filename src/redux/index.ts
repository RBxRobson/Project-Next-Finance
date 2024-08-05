import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import authReducer from './reducers/auth'
import navMobileReducer from './reducers/navMobile'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navMobile: navMobileReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
