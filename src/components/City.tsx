import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCity } from '../reducers/cityReducer'
import { CityStyle, HeadCity, BodyStyle } from './cityStyles'
import Delete from '/assets/delete.png'
import { City as CityType } from '../reducers/cityReducer'

type Props = {
  city: CityType
}

const City = ({ city }: Props) => {
    
  console.log('city', city)
  const dispatch = useDispatch()

  const handleOnclick = (idCity: string) => {
    dispatch(deleteCity(idCity))
  }

  return (
    <CityStyle>
        <HeadCity>
          <Link to={`/city/${city.id}`} className='link'>
            <h2>{city.name} ({city.sys.country})</h2>
          </Link>
          <button onClick={() => handleOnclick(city.id)} >
            <img src={Delete} alt="Not Found" />
          </button>
        </HeadCity>
        <BodyStyle>
          <h4>Temperature</h4>
          <div>
            <label>
              Min {city.main.temp_min}°C
            </label>
            <label>
              Max {city.main.temp_max}°C
            </label>
          </div>
        </BodyStyle>
        <BodyStyle>
          <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} 
            width="80" height="80" alt="Img No Found"
          />
          <label>{city.weather[0].description}</label>
        </BodyStyle>
    </CityStyle>     
  ) 
}

export default City
