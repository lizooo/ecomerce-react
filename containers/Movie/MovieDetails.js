import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import {MoviesContext} from '../../components/Contexts/Context'
import {Wrapper, MovieImg, MovieDescription, Divider} from './MovieDetails.styled'
import ButtonSmall from '../../components/Button/ButtonSmall'
import {InlineButtonsWrapper} from '../../components/Button/Button.styled'


const MovieDetails = () => {

  const {allMovies} = useContext(MoviesContext);
  const {name} = useParams();
  console.log(name)
  const currentMovie = allMovies.find(movie => (movie.name === name))
  return (
    <div>
      <Wrapper>
      <MovieImg>
        <img src={currentMovie.src} alt = "moviePoster" /> 
      </MovieImg>
      <MovieDescription>
        <h1>{currentMovie.name}</h1>
        <h2>Price: {currentMovie.price}$</h2>
        <Divider></Divider>
        <h3>{currentMovie.category}</h3>
        <h3>{currentMovie.description}</h3>
        <InlineButtonsWrapper>
        <ButtonSmall ActionCall = "Add to cart"></ButtonSmall>
        <ButtonSmall ActionCall = "Go Back"></ButtonSmall>
        </InlineButtonsWrapper>
      </MovieDescription>
      </Wrapper>
    </div>
  )
}

export default MovieDetails
