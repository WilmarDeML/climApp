import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { NavBarStyle } from './styles'
import SearchBar from '../SearchBar'

const NavBar = () => (
    <NavBarStyle id='barNav'>
        <ul>
            <li>
                <img src={Logo} alt="No se encontró la imagen" />
                <span >ClimApp</span>
            </li>
            <li>
                <Link to='/about' className='link' >
                    About
                </Link>
            </li>
            <li>
                <SearchBar />                
            </li>
        </ul>     
    </NavBarStyle>
)

export default NavBar