import styled from 'styled-components';

export const StyledGenreItem = styled.div`
  color:#AFB1BD;
  width: 130px;
  margin-bottom: 35px;
  height: 220px;
  h2{
    text-align: center;
    font-size: 16px;
    font-weight: 200;
  }
`;

export const GenreImage = styled.div`

  img {
    margin-bottom: 10px;
    width: 100%;
  }
  img:hover{
    opacity:60%;
  }
`;

export const GenreText = styled.div`
  text-align: center;
`;


export const StyledGenres = styled.div`
  margin: 50px;
  h1{
    font-size: 24px;
    font-weight: 500;
    margin: 40px 0;
    color: white;
  }
`;

export const GenresContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 92%;
    margin : 0 auto;
`;
