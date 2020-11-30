import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  color: white;
`;  

export const HeaderLogo = styled.div`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;  

export const HeaderNavigation = styled.ul`
  height: 80px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  font-weight: 200;
  background: none;
  > li{
  margin: 0 30px;
  color: #AFB1BD;
  }
`;  
