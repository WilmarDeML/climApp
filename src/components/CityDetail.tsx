
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DetailCont, Coordinates, Main, MainItems, MinMaxTemp, WindCont } from './cityDetailStyles'
import { Link } from 'react-router-dom';
import { City } from '../reducers/cityReducer';

import celsius from '/assets/celsius.png'


const  CityDetail = () => {
    const {id} = useParams()
    const cities = useSelector(({cities}: any) => cities)
    const city = cities?.find((c: City) => c.id === Number(id))
    
    if (!city) {
        return <Link to='/'>
            <h1>Home!</h1>
        </Link>
    }

    return (
        <>
            <DetailCont>
                <Link to='/'>
                    <img src="/assets/back.png" alt="Imagen flecha atrás" width={100}/>
                </Link>
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
                    <label className='wind-speed'>
                        <span>Speed {city.wind.speed} </span>
                        <img src="/assets/mph.png" alt='Imagen de metros por hora' />
                    </label>
                </WindCont>
                <Main>
                    <MainItems>
                        <h3>Main</h3>
                        <label>Pressure {city.main.pressure} hPa</label>
                        <label className='humidity'>
                            <span>Humidity {city.main.humidity}</span>
                            <img src="/assets/percent.png" alt='Imagen de porcentaje' />
                        </label>
                        <div>
                            <h4>Temperature {city.main.temp}<img src={celsius} alt='Imagen de grados celcius' /></h4>
                            <MinMaxTemp>
                                <label className='temp-min-max'>
                                    <span>Min {city.main.temp_min}</span>
                                    <img src={celsius} alt='Imagen de grados celcius' />
                                </label>
                                <label className='temp-min-max'>
                                    <span>Max {city.main.temp_max}</span>
                                    <img src={celsius} alt='Imagen de grados celcius' />
                                </label>
                            </MinMaxTemp>
                        </div>
                    </MainItems>
                </Main>
            </DetailCont>
        </>
	)
}

export default  CityDetail;