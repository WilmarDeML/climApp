import { useDispatch } from 'react-redux'
import { SerchCont, Input } from './searchBarStyles'
import swal from 'sweetalert'
import { getCity } from "../reducers/cityReducer"

const SearchBar = () => {

  const dispatch = useDispatch()

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const cityName = event.target.cityName.value

    if (!cityName) {
      return swal('¡Type the name city please!', '¡Dont forget to add the city name!', 'warning')
    }

    try {      
      await dispatch(getCity(cityName)) 
      event.target.cityName.value = ''
    } catch (error: any) {
      const message = error.response?.data?.message ?? error.message
      console.error(message)
      swal(message, '¡Type another city name!', 'warning')
    }

  }
  
  return (
    <SerchCont onSubmitCapture={ handleSubmit } >
      <Input
        name="cityName"
        type="text"
        placeholder="Type name of city..."
      />
      <Input type="submit" value="Search" className='inputButton' />
    </SerchCont>
  )
}

export default SearchBar