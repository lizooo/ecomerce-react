import React, { useState } from "react";
import ButtonSmall from "../Button/ButtonSmall";
import { CardDescription, CardImage, StyledCardItem, ButtonWrapper } from "./CardItem.styled";
import {Link } from 'react-router-dom'

function CardItem({ src, description, name, price, category }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <StyledCardItem>
      <CardImage 
          onMouseOver={() => setIsShown(true)}
          onMouseOut ={() => setIsShown(false)}>
        <img src={src} alt="poster" />
      </CardImage>
        <Link to={`/catalog/${name}`}> <h2>{name}</h2> </Link>
        <h3>{price}$</h3>
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
