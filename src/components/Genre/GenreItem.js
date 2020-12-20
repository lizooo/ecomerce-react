import React, { useState } from "react";
import { GenreText, GenreImage, StyledGenreItem} from "./GenreItem.styled";

function GenreItem({ src, genre }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <StyledGenreItem>
      <GenreImage 
          onMouseOver={() => setIsShown(true)}
          onMouseOut ={() => setIsShown(false)}
          >
        <img src={src} alt="poster" />
      </GenreImage>
      {/* {isShown && ( */}
        <GenreText>
        <h2>{genre}</h2>
        </GenreText>
        {/* )}  */}
    </StyledGenreItem>
  );
}


export default GenreItem;
