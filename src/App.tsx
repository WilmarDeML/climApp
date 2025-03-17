import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CityDetail from './components/CityDetail'

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/city/:id' Component={CityDetail} />
    </Routes>
  )
}

export default App
