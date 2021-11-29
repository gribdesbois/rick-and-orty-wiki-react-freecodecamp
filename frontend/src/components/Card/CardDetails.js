import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CardDetails() {
  const id = useParams()
  const [fetchedData, setFetchedData] = useState([])

  const {
    name, location, origin, gender, image, status, species,
  } = fetchedData
  const api = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
    }())
  }, [api])

  return (
    <div className='container d-flex justify-content-center mb-5'>
      <div className='d-flex flex-column gap-3'>
        <h1 className='text-center'>{name}</h1>
        <img className='img-fluid' src={image} alt="" />
      </div>
      {
        (() => {
          if (status == 'Dead') {
            return <div className='badge bg-danger fs-5'>{status}</div>
          } if (status === 'Alive') {
            return <div className='badge bg-success fs-5'>{status}</div>
          }
          return <div className='badge bg-secondary fs-5'>{status}</div>
        })()
      }
      <div className='content'>
        <div className=''>
          <span className='fw-bold'>Gender :</span>
          {gender}
        </div>
        <div className=''>
          <span className='fw-bold'>Location :</span>
          {location?.name}
        </div>
        <div className=''>
          <span className='fw-bold'>Origin :</span>
          {origin?.name}
        </div>
        <div className=''>
          <span className='fw-bold'>Species :</span>
          {species.name}
        </div>
      </div>
    </div>
  )
}

export default CardDetails
