import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { MyCarousel, MyDiv, MyUl, MyHeader } from './styles'
import { 
	SiJavascript, SiHtml5, SiCss3, SiNodeDotJs,
	SiReact, SiRedux, SiPostgresql, SiMongodb, SiBootstrap,
	SiGithub, SiLinkedin, SiStyledComponents } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
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
				<p className="legend">About ClimApp</p>
			</div>
			<div>
				<MyDiv>
					<MyHeader>
						<h1>
							Created By
						</h1>
						<MyDiv>
							<figure>
								<img src='https://media-exp1.licdn.com/dms/image/D5635AQHJBZfwt-QJig/profile-framedphoto-shrink_200_200/0/1627502594947?e=1628694000&v=beta&t=P9wg_cguYLIpsHF_UXj5MnHBdt18HJH_vYzZR7SPwF4' alt='No Found' />
							</figure>									
						</MyDiv>
					</MyHeader>
					<p>
						Mi nombre es Wilmar Zapata De MelquisedecLisbet, recientemente me gradué como 
							<a href='https://certificates.soyhenry.com/cert?id=3da91d66-cdef-4816-a20f-e6d8f4023e8a'> Desarrollador Web Full Stack </a>
						en  
							<a href='https://www.soyhenry.com/'> Henry.</a>
						Donde aprendí a implementar tecnologías como: 
						<MyUl>
							<li>
								<label>JavaScript <span><SiJavascript /></span></label>
							</li>
							<li>
								<label>HTML <span><SiHtml5 /></span></label>
							</li>
							<li>
								<label>CSS <span><SiCss3 /></span></label>
							</li>
							<li>
								<label>Node <span><SiNodeDotJs /></span></label>
							</li>
							<li>
								<label>React <span><SiReact /></span></label>
							</li>
							<li>
								<label>Redux <span><SiRedux /></span></label>
							</li>
							<li>
								<label>SQL <span><AiOutlineConsoleSql /></span></label>
							</li>
							<li>
								<label>PostgreSql <span><SiPostgresql /></span></label>
							</li>
							<li>
								<label>MongoDb <span><SiMongodb /></span></label>
							</li>
							<li>
								<label>Bootstrap <span><SiBootstrap /></span></label>
							</li>
						</MyUl>
						Diseño esta aplicación con la intensión de continuar practicando lo que he aprendido hasta ahora,
						con mucho cariño, me siento felíz de estar cada día aprendiendo más, me apasiona programar,
						crecer como persona y profesionalmente, me siento agradecido con Dios MelquisedecLisbet por tenerme
						en condiciones tan favorables.
					</p>
					<MyUl>
						<li>								
							<a href='https://www.linkedin.com/in/wilmardeml-dev/'>Perfíl LinkedIn <SiLinkedin /></a>
						</li>
						<li>
							<a href='https://github.com/WilmarDeML'>Perfíl GitHub <SiGithub /></a>
						</li>
					</MyUl>
				</MyDiv>
				<p className="legend">About Me</p>
			</div>
			<div>
				<MyDiv>
					<h1>
						Technologies used
					</h1>
					<p>
						Las tecnologías que usé para este proyecto fueron: 
						<MyUl>
							<li>
								<h2>JavaScript <span><SiJavascript /></span></h2>
							</li>
							<li>
								<h2>Node <span><SiNodeDotJs /></span></h2>
							</li>
							<li>
								<h2>React <span><SiReact /></span></h2>
							</li>
							<li>
								<h2>Redux <span><SiRedux /></span></h2>
							</li>
							<li>
								<h2>Styled Components <span><SiStyledComponents /></span></h2>
							</li>
						</MyUl>
					</p>
					<MyUl>
						<li>
							<a href='https://github.com/WilmarDeML/clima'>Repository <SiGithub /></a>
						</li>
					</MyUl>
				</MyDiv>
				<p className="legend">About Technologies</p>
			</div>
		</MyCarousel>
	)
}

export default  About;