import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import logger from 'redux-logger'

const preloadedState = {
  login: "Hello"
}

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
})