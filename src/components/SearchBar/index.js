import React, { useState } from "react"
import { buscarCiudad } from '../../actions'
import { useDispatch } from 'react-redux'
import { SerchCont, Input } from './styles'

const SearchBar = () => {

  const [ciudad, asignarCiudad] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = e => {
      e.preventDefault()
      ciudad ? dispatch(buscarCiudad(ciudad)) : alert('Type the name city please!')
      asignarCiudad('')
  }
  return (
    <SerchCont onSubmit={ e => handleSubmit(e) } >
      <Input        
        type="text"
        placeholder="Type name of city..."
        value={ciudad}
        onChange={e => asignarCiudad(e.target.value)}
      />
      <Input type="submit" value="Search" className='inputButton' />
    </SerchCont>
  )
}

export default SearchBar