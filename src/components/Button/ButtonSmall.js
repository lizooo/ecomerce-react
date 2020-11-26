import React from 'react';
import StyledButton from './ButtonSmall.styled'

function ButtonSmall({onclickFunc, ActionCall}){
  return(
      <StyledButton onClick={onclickFunc}><h5>{ActionCall}</h5></StyledButton>
  );
};



export default ButtonSmall;