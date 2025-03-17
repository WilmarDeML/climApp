import { configureStore } from '@reduxjs/toolkit'

import citiyReducer from './reducers/cityReducer'

const store = configureStore({
  reducer: {
    cities: citiyReducer
  },
})

export default store
