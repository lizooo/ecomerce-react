import styled from 'styled-components';

export const StyledButton = styled.div`
  width: 138px;
  height: 50px;
  background-color: #383BE4;
  border: none;
  margin-top: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content:center;
  h5{
    font-weight: 400;
    color: white;
  }
  :hover{
    border: solid 1px white;
  }
`;

export const InlineButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default StyledButton;