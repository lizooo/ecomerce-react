import styled from 'styled-components';

export const StyledCardItem = styled.div`
  color: white;
  width: 32%;
  margin-bottom: 35px;
  a{
    color: white;
    text-decoration: none;
  }
  a:hover{
    color: grey;
  }
  h2{
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 0;
  }
  h3{
    text-align: center;
    font-size: 18px;
    font-weight: 200;
    color: #AFB1BD;
    margin-top: 5px;
  }
`;

export const CardImage = styled.div`
  
  img {
    margin-bottom: 10px;
    width: 100%;
  }
  img:hover{
    opacity: 20%;

  }
`;

export const CardDescription = styled.div`
  margin-top: -290px ;
  text-align: center;
  max-height: 100px;
  p{
    line-height: 24px;
    padding:10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCards = styled.div`
  margin: 50px;
  h1{
    font-size: 24px;
    font-weight: 500;
    margin: 40px 0;
    color: white;
  }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

export const ButonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
`;
