import React from 'react'
import {StyledSearch} from './Search.styled'

const Search = () => {
  return (
    <div>
      <StyledSearch>
      <label>Search:</label><br></br>
      <input type="text" name="search"></input>
      </StyledSearch>
    </div>

  )
}

export default Search
