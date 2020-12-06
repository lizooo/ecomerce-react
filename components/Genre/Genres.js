import React from "react";
import { StyledGenres, GenresContainer} from "./GenreItem.styled";
import GenreItem from "../Genre/GenreItem"


const genres = [
  {
    src: "https://i.pinimg.com/474x/4b/29/f2/4b29f252bda215e24c536ab509a19db5.jpg",
    genre: "Romance"
  },
  {
    src: "https://i.pinimg.com/474x/76/1a/cb/761acbe5772405ee47151bf89ddf8c23.jpg",
    genre: "Animation"
  },
  {
    src: "https://i.pinimg.com/474x/2f/ba/f7/2fbaf71974089b10cc6c8d4302ebb272.jpg",
    genre: "Disastrous art"
  },
  {
    src: "https://i.pinimg.com/474x/3f/65/45/3f6545838ad3b694044c255ca11b3aaf.jpg",
    genre: "History"
  },
  {
    src: "https://i.pinimg.com/474x/81/ba/08/81ba0801d28fed1b3a8e97377ce62c5a.jpg",
    genre: "Sci-fi"
  },
  {
    src: "https://i.pinimg.com/474x/09/3f/e6/093fe6af849d9e0954873fc322f580b1.jpg",
    genre: "Mystery"
  },
  {
    src: "https://i.pinimg.com/474x/cb/f0/01/cbf0015f7e31b2a5e46d9639896555ea.jpg", 
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
