import React from 'react';
import arrow from '../../images/arrow.png'
import welcome from '../../images/welcome.png'
import logo from '../../images/logo.png'
import { LandCont, Welcome, Logo, Arrow } from './styles'

const  Landing = () => {
	return (
		<LandCont>			
            <Welcome src={welcome} alt='No found' />   
            <Logo src={logo} alt='No found' />       
            <Arrow src={arrow} alt='No found' />
		</LandCont>
	)
}

export default Landing;