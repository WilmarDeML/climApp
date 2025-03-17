import City from './City'
import { City as CityType } from '../reducers/cityReducer'
import { useSelector } from 'react-redux'
import { CitiesStyle } from './citiesStyles'
import Landing from './Landing'

const Cities = () => {
  const cities = useSelector(({ cities }: any) => cities)
  if(cities.length){
    return (
      <CitiesStyle>
        {
          cities.map((city: CityType) => 
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