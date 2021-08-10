import React from 'react'
import City from '../City'
import { useSelector } from 'react-redux'
import { CitiesStyle } from './styles'
import Landing from '../Landing'

const Cities = () => {
  const cities = useSelector(state => state.listCities)
  if(cities.length){
    return (
      <CitiesStyle>
        {
          cities.map(city => 
            <City
                key={city.id}
                city={city}
            />
          )
        }
      </CitiesStyle>
    )
  } else {
    return <Landing />
  }
}

export default Cities  