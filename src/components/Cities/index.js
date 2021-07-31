import React from 'react'
import City from '../City'
import { useSelector } from 'react-redux'

const Cities = () => {
    const cities = useSelector(state => state.listCities)
  if(cities.length){
    return (
      <section>
        {
          cities.map(city => 
            <City
                key={city.id}
                city={city}
                cities={cities}
            />
          )
        }
      </section>
    )
  } else {
    return <h2><em>Without Cities!</em></h2>
  }
}

export default Cities