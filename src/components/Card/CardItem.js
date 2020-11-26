import React, { useState } from "react";
import ButtonSmall from "../Button/ButtonSmall";
import { CardDescription, CardImage, StyledCardItem, ButtonWrapper } from "./CardItem.styled";

function CardItem({ src, description, name }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <StyledCardItem>
      <CardImage 
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
        <img src={src} alt="poster" />
      </CardImage>
        <h2>{name}</h2>
      {isShown && (
        <div>
        <CardDescription>
          <p>{description.length < 150 ? description : description.substr(0, 150) + '...'}</p>
        </CardDescription>
        <ButtonWrapper>
            <ButtonSmall ActionCall="More"></ButtonSmall>
        </ButtonWrapper>
        </div>
      )}
    </StyledCardItem>
  );
}

export default CardItem;
