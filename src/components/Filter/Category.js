import React from 'react'
import Select from 'react-select'



const Category = ( options, onChange) => {
  return (
    <Select options={options} onChange = {onChange}/>
  )
};

export default Category;

