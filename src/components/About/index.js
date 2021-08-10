import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { MyCarousel, MyDiv } from './styles'

// const handleOnClickItem = () => alert('Click Item')
// const handleOnClickThumb = () => alert('Click Thumb')
// const handleOnChange = () => alert('Change')
const  About = () => {
	return (
		<MyCarousel /*axis='vertical'*/ 
			// centerMode 
			// onClickItem={handleOnClickItem}	
			// onClickThumb={handleOnClickThumb}
			// onChange={handleOnChange}
			thumbWidth={70}
			// showIndicators={false}
		>
                <div>
					<MyDiv>
						<h1>About ClimApp</h1>
						<p>Basically ClimApp has been created with the next features:</p>
						<ul>
							<li>It consume extern api <a href='https://openweathermap.org/'>openweathermap</a></li>
							<li>
								In search bar an user can types a name of a city around the world and it shows a card with the next details: 
								<ol>
									<li>
										Name of the city (two-letter country code)
										<span><em>(It has a link to other details of the city's climate)</em></span>
									</li>
									<li>Each card has a button to remove it from the list of cities displayed</li>
									<li>Temperature on time, min and max temperature</li>
									<li>Climate image</li>
									<li>Short description about the climate</li>
								</ol>
							</li>
							<li>
								Route 'About' is this and shows a carousel with:
								<ol>
									<li>About ClimApp</li>
									<li>Created by</li>
									<li>Technologies used</li>
								</ol>
							</li>
						</ul>
					</MyDiv>
                    {/* <img src={logo} alt='No Found'/> */}
                    <p className="legend">About ClimApp</p>
                </div>
                {/* <div>
                    <img src={logo} alt='No Found'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={logo} alt='No Found'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={logo} alt='No Found'/>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={logo} alt='No Found'/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={logo} alt='No Found'/>
                    <p className="legend">Legend 6</p>
                </div> */}
            </MyCarousel>
	)
}

export default  About;