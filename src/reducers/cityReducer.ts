import { createSlice, current } from '@reduxjs/toolkit'

import cityService from '../services/cities'

export interface City {
  id: string
  name: string
  sys : {
    country: string
  },
  main: {
    temp_min: number
    temp_max: number
  }
  weather: Array<{
    icon: string
    description: string
  }>
}

const citySlice = createSlice({
  name: 'cities',
  initialState: [],
  reducers: {
    appendCity (state: City[], action) {
      console.log('action', action)
      state.push(action.payload)
    },
    deleteCity (state, action) {
      console.log('state', current(state))
      return state.filter((city: City) => city.id !== action.payload)
    }
  }
})

export const { appendCity, deleteCity } = citySlice.actions

export const getCity = (city: string): any => {
  return async (dispatch: any, getState: any) => {
    const cities = getState().cities
    const cityFound = await cityService.getByCity(city)
    if (cities.find((city: City) => city.id === cityFound.id)) {
      throw new Error(`City '${cityFound.name}' already exists`)
    }
    await dispatch(appendCity(cityFound))
  }
}

export default citySlice.reducer