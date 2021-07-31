import {
    ADD_CITY, DELETE_CITY
} from '../actions/actionTypes'

const initialState = {
    listCities: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,                
                listCities: !state.listCities.find(c => c.id === action.payload.id) ? [...state.listCities, action.payload] : state.listCities
            } 
        case DELETE_CITY:
            return {
                ...state,                
                listCities: state.listCities.filter(c => c.id !== action.payload)
            }
        default:
            return state;
    }
}

export default rootReducer;