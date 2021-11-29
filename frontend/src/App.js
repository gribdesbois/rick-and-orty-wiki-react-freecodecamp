import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Episodes from './pages/Episodes'
import Location from './pages/Location'
import Home from './pages/Home'
import CardDetails from './components/Card/CardDetails'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id'element={<CardDetails />}/>
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/location' element={<Location />} />
          <Route path='/location:id'element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
