import styled from 'styled-components';

export const StyledButtonSmall = styled.div`
  width: 138px;
  height: 44px;
  background-color: #383BE4;
  border: none;
  margin-top: 17px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content:center;
  z-index: 100;
  h5{
    font-weight: 400;
    color: white;
  }
  :hover{
    border: solid 1px white;
  }
`;

export default StyledButtonSmall;