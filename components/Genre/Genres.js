import React from "react";
import { StyledGenres, GenresContainer, StyledGenreItem} from "./GenreItem.styled";
import GenreItem from "../Genre/GenreItem"


const genres = [
  {
    src: "images/titanic_f05c_1440x2560.jpg",
    genre: "Romance"
  },
  {
    src: "images/batman-ninja_0459_1440x2560.jpg",
    genre: "Animation"
  },
  {
    src: "images/the-disaster-artist_9fb3_1440x2560.jpg",
    genre: "Disastrous art"
  },
  {
    src: "images/chernobyl_fc66_1440x2560.jpg",
    genre: "History"
  },
  {
    src: "images/westworld_99d3_1440x2560.jpg",
    genre: "Sci-fi"
  },
  {
    src: "images/moon_dcab_1440x2560.jpg",
    genre: "Mystery"
  },
  {
    src: "images/euphoria_a784_1440x2560.jpg", 
    genre: "Drama"
  }
];

function Genres() {
  return (
    <div>
      <StyledGenres>
        <h1>Explore genres:</h1>
        <GenresContainer>
          {genres.map(({src, genre}, key) => (
            <GenreItem
              key={`card-${genre}`}
              src={src}
              genre={genre}
            />
          ))}
        </GenresContainer>
      </StyledGenres>
    </div>
  );
}

export default Genres;
