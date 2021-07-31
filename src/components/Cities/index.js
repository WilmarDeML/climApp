import React from 'react'
import City from '../City'
import { useSelector } from 'react-redux'
import { CitiesStyle } from './styles'

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
                cities={cities}
            />
          )
        }
      </CitiesStyle>
    )
  } else {
    return <h2><em>Without Cities!</em></h2>
  }
}

export default Cities  