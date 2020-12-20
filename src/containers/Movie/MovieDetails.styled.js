import styled from 'styled-components';


export const Wrapper = styled.div`
  margin: 0 140px -80px;
  height: 420px;
  display: flex;
  
`;

export const MovieImg = styled.div`
  width: 57%;
  img{
    width: 100%;
  }
`;

export const MovieDescription = styled.div`
  width: 43%;
  padding-left: 84px;
  color: white;
  h1{
    font-size: 24px;
    font-weight: 200;
    margin: 0;
  }

  h2{
    font-size: 18px;
    color: #82828B;
    font-weight: 200;
    margin-bottom: 15px;
  }

  h3{
    margin-top: 30px;
    font-weight: 300;
    font-size: 16px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #82828B;
`;
