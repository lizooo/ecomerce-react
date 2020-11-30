import styled from 'styled-components'

export const MovieInfoWraper = styled.div `
  height: 300px;
  margin: 130px 100px 0;
  display: flex;
`;

export const MoviePoster = styled.div`
width: 43%;
  img{
    width: 100%
  }
`;

export const MovieReview = styled.div`
  width: 57%;
  padding-right: 30px;
  text-align: end;
  color:  white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    font-weight: 200;
    font-size: 28px;
    line-height: 28px;
    margin: 0;
  }
  h3{
    margin: 0;
    color: #82828B;
    font-weight: 200;
  }
  p{
    font-size: 16px;
    font-weight: 200;
    color: #AFB1BD;
  }
  p:before{
    color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
  }
`;