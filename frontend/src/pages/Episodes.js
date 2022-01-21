/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import InputGroup from '../components/Filter/category/InputGroup'

function Episodes() {
  const [results, setResults] = useState([])
  const [info, setInfo] = useState([])
  const [id, setId] = useState(1)

  const { air_date, episode, name } = info
  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json())
      setInfo(data)

      const a = await Promise.all(
        data.characters.map((x) => fetch(x).then((res) => res.json())),
      )
      setResults(a)
    })()
  }, [api])

  return (
    <div className='container'>
      <div className='row mb-3'>
        <h1 className='text-center mb-3'>
          Episode name : {' '}
          <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-center'>
          Air date: {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12 mb-4'>
          <h4 className='text-center mb-4'>Pick Episode</h4>
          <InputGroup name='Episode' changeID={setId} total={51} />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Card page='/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes
