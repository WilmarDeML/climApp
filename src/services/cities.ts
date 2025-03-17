import axios from 'axios'
import { apiKey } from '../config'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='


const getByCity = async (city: string) => {
  const response = await axios.get(`${baseUrl}${city}&appid=${apiKey}&units=metric`)
  return response.data
}

export default {
  getByCity
}