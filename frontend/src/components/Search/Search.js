import React from 'react'
import styles from './Search.module.scss'

function Search({ setSearch, setPageNumber }) {
  const searchBtn = ($event) => {
    $event.preventDefault()
  }

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={($event) => {
          setPageNumber(1)
          setSearch($event.target.value)
        }}
        placeholder='Search for characters'
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  )
}

export default Search
