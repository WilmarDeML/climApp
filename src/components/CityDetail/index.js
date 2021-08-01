
import React from 'react';
import { useSelector } from 'react-redux';
import celsius from '../../images/celsius.png'
import mph from '../../images/mph.png'
import back from '../../images/back.png'
import { DetailCont, Coordinates, Main, MainItems, MinMaxTemp, WindCont } from './styles'

const  CityDetail = ({ match, history }) => {
    const id = parseInt(match.params.id)
    const cities = useSelector(state => state.listCities)
    const city = cities?.find(c => c.id === id)
    
    return (
        <DetailCont>
            <button onClick={history.goBack}><img src={back} alt='No Found' /></button>
			<h1>
                {city.name} ({city.sys.country}) 
                <span> UTC{city.timezone/60/60} </span>
            </h1>
            <Coordinates>
                <h3>Coordinates</h3>
                <label>Latitude {city.coord.lat}°N</label>
                <label>Longitude {city.coord.lon}°W</label>
            </Coordinates>
            <WindCont>
                <h3>Wind</h3>
                <label>Direction {city.wind.deg}°</label>
                <label>Speed {city.wind.speed} <img src={mph} alt='No Found' /></label>
            </WindCont>
            <Main>
                <MainItems>
                    <h3>Main</h3>
                    <label>Pressure {city.main.pressure} hPa</label>
                    <label>Humidity {city.main.humidity}%</label>
                    <div>
                        <h4>Temperature {city.main.temp}<img src={celsius} alt='No Found' /></h4>
                        <MinMaxTemp>
                            <label>Min {city.main.temp_min}<img src={celsius} alt='No Found' /></label>
                            <label>Max {city.main.temp_max}<img src={celsius} alt='No Found' /></label>
                        </MinMaxTemp>
                    </div>
                </MainItems>
            </Main>
		</DetailCont>
	)
}

export default  CityDetail;