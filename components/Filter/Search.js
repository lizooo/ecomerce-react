import React from 'react'
import {StyledSearch} from './Search.styled'
import {TextField} from '@material-ui/core'


const Search = ({value, onChange}) => {
  return (
    <div>
      <StyledSearch>
      <label>Search:</label><br></br>
      <input type="text" name="search" value = {value} onChange = {onChange}></input>
      </StyledSearch>
    </div>

  )
}

export default Search
