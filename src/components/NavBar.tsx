import { Link } from 'react-router-dom'
import Logo from '/logo.png'
import { NavBarStyle } from './navBarStyles'
import SearchBar from '../components/SearchBar'

const NavBar = () => (
  <NavBarStyle id='barNav'>
    <ul>
      <li>
        <img src={Logo} alt="Logo de la aplicación" />
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