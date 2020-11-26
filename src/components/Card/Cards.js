import React, { useState } from "react";
import CardItem from "./CardItem.js";
import Button from "../Button/Button.js";
import { StyledCards, CardsContainer, ButonContainer } from "./CardItem.styled";

const data = [
  {
    src: "images/star-wars-the-last-jedi_874d_2560x1600.jpg",
    description:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    name: "Star Wars",
  },
  {
    src: "images/silicon-valley_653a_2560x1600.jpg",
    description:
      "Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper.",
    name: "The Sillicon Valley",
  },
  {
    src: "images/black-mirror_642a_2560x1600.jpg",
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    name: "Black Mirror",
  },
  {
    src: "images/fargo_5cbd_2560x1600.jpg",
    description:
      "Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota.",
    name: "Fargo",
  },
  {
    src: "images/black-mirror_642a_2560x1600.jpg",
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    name: "Black Mirror",
  },
  {
    src: "images/mr-robot_6529_2560x1600.jpg",
    description:
      "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    name: "Mr Robot",
  },
];

function Cards() {
  const [visible, setVisible] = useState(3);
  const loadMoreCards = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div>
      <StyledCards>
        <h1>Trending this season</h1>
        <CardsContainer>
          {data.slice(0, visible).map(({ src, description, name }, key) => (
            <CardItem
              key={`card-${name}`}
              src={src}
              description={description}
              name={name}
            />
          ))}
        </CardsContainer>
        <ButonContainer>
          <Button onclickFunc={loadMoreCards} ActionCall="Load More" />
        </ButonContainer>
      </StyledCards>
    </div>
  );
}

export default Cards;
