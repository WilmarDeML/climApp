import {Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CityDetail from './components/CityDetail'
import './App.css'

const App = () => (
  <div className="App">
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/city/:id' component={CityDetail} />
  </div>
);

export default App;
