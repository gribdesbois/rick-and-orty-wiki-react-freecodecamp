import React, { useState, useEffect } from 'react'
import Search from '../components/Search/Search'
import Filter from '../components/Filter/Filter'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagination/Pagination'

export default function Home() {
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
              <Card page='/' results={results} />
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
