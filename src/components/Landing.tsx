import arrow from '/assets/arrow.png'
import welcome from '/assets/welcome.png'
import logo from '/logo.png'
import { LandCont, Welcome, Logo, Arrow } from './landingStyles'

const  Landing = () => {
	return (
		<LandCont>			
      <Welcome src={welcome} alt='Imagen de bienvenida con mensaje welcome' />   
      <Logo src={logo} alt='Imágen del logo' />       
      <Arrow src={arrow} alt='Imágen de flecha hacia arriba' />
		</LandCont>
	)
}

export default Landing;