import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCity } from '../../actions'

const City = ({ city, cities }) => {   

  const dispatch = useDispatch()

  const handleOnclick = (idCity) => {
    dispatch(deleteCity(idCity))
  }

  return <div className="card">
    <div id="closeIcon" className="row">
        <button onClick={() => handleOnclick(city.id)} >X</button>
    </div>        
      <div>
        <Link to={`/ciudad/${city.id}`}>
          <h5>{city.name}</h5>
        </Link>
        <div>
          <div>
            <p>Min</p>
            <p>{city.main.temp_min}°C</p>
          </div>
          <div>
            <p>Max</p>
            <p>{city.main.temp_max}°C</p>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} width="80" height="80" alt="Img No Found" />
          </div>
        </div>
      </div>
  </div>      
}

export default City
