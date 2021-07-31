import {Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import './App.css'

const App = () => (
  <div className="App">
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    {/*<Route exact path='/countries/:id' component={DetallePais} /> */}
  </div>
);

export default App;
