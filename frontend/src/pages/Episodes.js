import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import InputGroup from '../components/Filter/category/InputGroup'

function Episodes() {
  const [results, setResults] = useState([])
  const [info, setInfo] = useState([])
  const [id, setId] = useState(1)

  const { airDate, episode, name } = info
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
          Air date: {airDate === '' ? 'Unknown' : airDate}
        </h5>
      </div>
    </div>
  )
}

export default Episodes
