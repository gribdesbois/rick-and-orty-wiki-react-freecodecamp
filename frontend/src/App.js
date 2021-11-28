import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/Search/Search'
import Card from './components/Card/Card'
import Pagination from './components/Pagination/Pagination'
import Filter from './components/Filter/Filter'
import Navbar from './components/Navbar/Navbar'
import Episodes from './pages/Episodes'
import Location from './pages/Location'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  const [fetchedData, setFetchedData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
      console.log(data)
    }())
  }, [api])

  const { info, results } = fetchedData

  return (
    <div className='App'>
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}></Search>
      <div className='container'>
        <div className='row'>
          <Filter
            pageNumber={pageNumber}
            status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <Card results={results} />
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  )
}

export default App
