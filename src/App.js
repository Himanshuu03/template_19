import React from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Destination from './Pages/Destination'
import Packages from './Pages/Packages'
import Tours from './Pages/Tours'
import Promotions from './Pages/Promotions'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/promotions' element={<Promotions/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App