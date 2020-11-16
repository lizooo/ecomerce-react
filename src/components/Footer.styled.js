import styled from 'styled-components';

export const StyledFooter = styled.div `
  background-color: #1A1C2E;
  height: 356px;
`;

export const FooterWrapper = styled.div`
  width: 80%;
  height: 300px;
  margin: 0 auto;
  padding-top: 58px;
  h4{
    font-weight: 100;
    font-size: 12px;
  }
`;

export const ColumnsContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.05em solid #AFB1BD;
`;

export const Column = styled.div`
  width: 20%;
  height: 100%;
  h1{
    font-size: 16px;
  font-weight: 300;
  color: #AFB1BD;
  }
  h3{
    font-size: 14px;
  }
  h5{
    font-size: 12px;
  }
`;

export const Icons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.div`
    font-size: 20px;
`;