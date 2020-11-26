import React from 'react'
import {StyledSelect} from './Category.styled'

const Category = () => {
  return (
    <div>
      <StyledSelect>
      <label>Category:</label><br></br>
      <select>
        <option>Movie</option>
        <option>Series</option>
      </select>
      </StyledSelect>
    </div>
  )
};

export default Category;
