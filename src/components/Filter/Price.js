import React from 'react'
import {StyledPrice} from './Price.styled' 

const Price = () => {
  return (
    <div>
      <StyledPrice>
      <label>Price:</label><br></br>
    <span><input type="number" name="price" placeholder="from.."></input></span>
    <span><input type="number" name="price" placeholder="to.."></input></span>
      </StyledPrice>
    </div>
  )
}

export default Price
