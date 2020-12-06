import styled from 'styled-components';


export const StyledHero = styled.div`
  margin-top: -248px ;
  height: 100vh;
  background: url('https://i.pinimg.com/originals/14/e4/d7/14e4d78415a2a29e093af61e31326496.jpg') center center/cover no-repeat; 
  color: white;
`;

export const HeroWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 100px 90px ;
  height: 90vh;
  background: none;
  h1{
    font-size: 32px;
    width: 500px;
    font-weight: 500;
    margin: 10px 0;
  }
  p{
    font-size: 16px;
    width: 500px;
    font-weight: 100;
    line-height: 24px;
    margin: 0;
  }
`;

