import React from 'react'

const Search = ({onQuery}) => {
  return (
    <form className='searchForm'>
      <input 
          type="search" 
          name="search" 
          aria-label="Tarea a buscar" 
          placeholder="Texto a buscar..."
          onChange={(e) => onQuery(e.target.value)}
      />
    </form>
  )
}

export default Search