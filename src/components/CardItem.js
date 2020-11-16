import React, { useState } from "react";
import { CardDescription, CardImage, StyledCardItem } from "./CardItem.styled";

function CardItem({ src, description, name }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <StyledCardItem>
      <CardImage>
        <img src={src} alt="poster" />
      </CardImage>
      {isShown && (
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      )}
      <h1
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {name}
      </h1>
    </StyledCardItem>
  );
}

export default CardItem;
