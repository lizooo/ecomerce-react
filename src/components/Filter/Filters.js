import React from 'react'
import FiltersWrapper from './Filters.styled'
import Search from './Search'
import Price from './Price'
import Category from './Category'
import ButtonSmall from '../Button/ButtonSmall'

const Filters = () => {
  return (
    <FiltersWrapper>
      <Search></Search>
      <Price></Price>
      <Category></Category>
      <ButtonSmall ActionCall='Apply'></ButtonSmall>
    </FiltersWrapper>
  )
}

export default Filters
