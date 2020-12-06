import React from 'react';
import StyledButton from './Button.styled'

function Button({onclickFunc, ActionCall}){
  return(
      <StyledButton onClick={onclickFunc}><h5>{ActionCall}</h5></StyledButton>
  );
};



export default Button;