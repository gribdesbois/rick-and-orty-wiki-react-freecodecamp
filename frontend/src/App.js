import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React, {useState, useEffect} from 'react'
import Search from './components/Search/Search'
import Card from './components/Card/Card'
import Pagination from './components/Pagination/Pagination'
import Filter from './components/Filter/Filter'
import Navbar from './components/Navbar/Navbar'

function App() {
  let [fetchedData, setFetchedData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`


  useEffect(() => { 
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
      console.log(data)
    })()
  }, [api])

  let {info, results} = fetchedData

  
  return (
    <div className='App'>
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}></Search>
      <div className='container'>
        <div className='row'>
          Filter component will be placed here
          <div className='col-lg-8 col-12'>
            <div className='row'>
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
