import styled from 'styled-components';

export const StyledCardItem = styled.div`
  width: 32%;
  h1{
    font-size: 18px;
    text-align: center;
    font-weight: 200;
    color: #AFB1BD;
  }
  h1:hover{
    color: #fff;
  }
`;

export const CardImage = styled.div`
  img {
    width: 100%;
  }
`;

export const CardDescription = styled.div`
  position: absolute;
  width: 374px;
  height: 235px;
  margin-top: -238px ;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0D1027;
  opacity: 0.7; 
  p{
    width: 80%;
    line-height: 24px;
  }
`;

