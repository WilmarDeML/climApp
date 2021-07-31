import React, { useState } from "react"
import { buscarCiudad } from '../../actions'
import { useDispatch } from 'react-redux'

const SearchBar = () => {

  const [ciudad, asignarCiudad] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = e => {
      e.preventDefault()
      ciudad ? dispatch(buscarCiudad(ciudad)) : alert('Type the name city please!')
      asignarCiudad('')
  }
  return (
    <form id='searchBar' onSubmit={ e => handleSubmit(e) } >
      <input
        id='inputText'
        type="text"
        placeholder="Name of city..."
        value={ciudad}
        onChange={e => asignarCiudad(e.target.value)}
      />
      <input id='boton' type="submit" value="Search" />
    </form>
  )
}

export default SearchBar