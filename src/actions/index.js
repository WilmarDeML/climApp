import { ADD_CITY, DELETE_CITY } from './actionTypes';
import swal from 'sweetalert'

const axios = require('axios');

require('dotenv').config()
const apiKey = process.env.REACT_APP_APIKEY;

export const buscarCiudad = city => (
    async dispatch => {	
        try {
            const ciudad = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            await dispatch({ type: ADD_CITY, payload: ciudad.data })            
        } catch (error) {
            swal(`${city} No Found!`, 'Type a valid name please!', 'error', {buttons: false, timer:3000})
        }	
    }
)

export const deleteCity = id => (
    dispatch => dispatch({ type: DELETE_CITY, payload: id })
)