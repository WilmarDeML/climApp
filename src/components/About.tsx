import { MyDiv, MyUl, MyHeader, MyBody } from './aboutStyles'
import { 
	SiJavascript, SiHtml5, SiCss3, SiNodedotjs,
	SiReact, SiRedux, SiPostgresql, SiMongodb, SiBootstrap,
	SiGithub, SiLinkedin, SiStyledcomponents, SiVite, SiNpm, SiGit,
  SiSlint, SiVercel } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { Link } from "react-router-dom"

const  About = () => {
	return (
    <MyBody>
      <Link to='/' className="back">
        <img src="/assets/arrow.png" alt="Flecha hacia arriba" width={50}/>
        <span >Atrás</span>
      </Link>
      {/* About ClimApp */}
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
        <p className="legend">About ClimApp</p>
      </MyDiv>
      {/* Created By */}
      <MyDiv>
        <MyHeader>
          <h1>
            Created By
          </h1>
          <figure>
            <img src='/assets/profile.jpg' alt='My photo' width={150} />
          </figure>
        </MyHeader>
        <section>
          Mi nombre es Wilmar Zapata De MelquisedecLisbet Desarrollador Web Full Stack, capacitado inicialmente en
          <a href='https://www.soyhenry.com/'> Henry.</a> Donde aprendí a implementar tecnologías como: 
          <MyUl>
            <li>
              <label>JavaScript</label>
              <span><SiJavascript /></span>
            </li>
            <li>
              <label>HTML</label>
              <span><SiHtml5 /></span>
            </li>
            <li>
              <label>CSS</label>
              <span><SiCss3 /></span>
            </li>
            <li>
              <label>Node</label>
              <span><SiNodedotjs /></span>
            </li>
            <li>
              <label>React</label>
              <span><SiReact /></span>
            </li>
            <li>
              <label>Redux</label>
              <span><SiRedux /></span>
            </li>
            <li>
              <label>SQL</label>
              <span><AiOutlineConsoleSql /></span>
            </li>
            <li>
              <label>PostgreSql</label>
              <span><SiPostgresql /></span>
            </li>
            <li>
              <label>MongoDb</label>
              <span><SiMongodb /></span>
            </li>
            <li>
              <label>Bootstrap</label>
              <span><SiBootstrap /></span>
            </li>
          </MyUl>
          Diseño esta aplicación con la intensión de continuar practicando lo que he aprendido hasta ahora,
          con mucho cariño, me siento felíz de estar cada día aprendiendo más, me apasiona programar,
          crecer como persona y profesionalmente, me siento agradecido con Dios MelquisedecLisbet por tenerme
          en condiciones tan favorables.
        </section>
        <MyUl>
          <li>								
            <a href='https://www.linkedin.com/in/wilmardeml-dev/'>Perfíl LinkedIn <SiLinkedin /></a>
          </li>
          <li>
            <a href='https://github.com/WilmarDeML'>Perfíl GitHub <SiGithub /></a>
          </li>
        </MyUl>
        <p>Actualmente estoy realizando un curso con la Universidad de Helsinky 
          <a href="https://fullstackopen.com/es/"> FullStack Open </a>
        </p>
        <p className="legend">About Me</p>
      </MyDiv>
      {/* Technologies used */}
      <MyDiv>
        <h1>
          Technologies used
        </h1>
        <section>
          Las tecnologías que usé para este proyecto fueron: 
          <MyUl>
            <li>
              <h3>Vite</h3>
              <span><SiVite /></span>
            </li>
            <li>
              <h3>JavaScript</h3>
              <span><SiJavascript /></span>
            </li>
            <li>
              <h3>Node</h3>
              <span><SiNodedotjs /></span>
            </li>
            <li>
              <h3>React</h3>
              <span><SiReact /></span>
            </li>
            <li>
              <h3>Redux</h3>
              <span><SiRedux /></span>
            </li>
            <li>
              <h3>Styled Components</h3>
              <span><SiStyledcomponents /></span>
            </li>
            <li>
              <h3>Git</h3>
              <span><SiGit /></span>
            </li>
            <li>
              <h3>NPM</h3>
              <span><SiNpm /></span>
            </li>
            <li>
              <h3>Slint</h3>
              <span><SiSlint /></span>
            </li>
            <li>
              <h3>Vercel</h3>
              <span><SiVercel /></span>
            </li>
          </MyUl>
        </section>
        <a href='https://github.com/WilmarDeML/clima'>Repository <SiGithub /></a>
        <p className="legend">About Technologies</p>
      </MyDiv>
    </MyBody>
	)
}

export default  About;