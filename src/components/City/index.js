import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCity } from '../../actions'
import { CityStyle, HeadCity, BodyStyle } from './styles'
import Delete from '../../images/delete.png'

const City = ({ city }) => {   

  const dispatch = useDispatch()

  const handleOnclick = (idCity) => {
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
            <span>
              Min {city.main.temp_min}°C
            </span>
            <span>
              Max {city.main.temp_max}°C
            </span>
          </div>
        </BodyStyle>
        <BodyStyle>
          <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} width="80" height="80" alt="Img No Found" />
          <label>There are {city.weather[0].description}</label>
        </BodyStyle>
    </CityStyle>     
  ) 
}

export default City
