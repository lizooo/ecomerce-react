import React from 'react'
import {MovieInfoWraper, MoviePoster, MovieReview} from './MovieInfo.styled'


const MovieInfo = () => {
  return (
    <div>
      <MovieInfoWraper>
        <MovieReview>
          <h1>The Disaster Artist </h1>
          <h3>2017</h3>
          <p>
            Ed Wood was Stanley Kubrick compared to Tommy Wiseau but James Franco treats him with such loving care that we can 
            connect with his humanity without letting his eccentricities pull us away from him. That, I think, was the most
            moving aspect of this outrageous true life tale. James Franco is spectacular keeping it true and real in a character
            that lent itself for caricature. Dave Franco, James's brother in real life is the most believable instant soulmate 
            of the James Dean wannabe. Seth Rogen is also perfect as the one knows that they're in for a major disaster and yet sees 
            the whole thing to the bitter end. I must confess I hadn't heard of The Room but now it's on top of my list of films 
            I want to see next. 
            <br /> <br />
            Danielledecolombie
          </p>
        </MovieReview>
        <MoviePoster>
          <img src="images/TDA-Cover.jpg" alt="poster" />
        </MoviePoster>
      </MovieInfoWraper>
    </div>
  )
}


export default MovieInfo
