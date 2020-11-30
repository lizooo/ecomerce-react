import React, { useState } from "react";
import CardItem from "./CardItem.js";
import Button from "../Button/Button.js";
import { StyledCards, CardsContainer, ButonContainer } from "./CardItem.styled";

export const movies = [
  {
    src: "images/star-wars-the-last-jedi_874d_2560x1600.jpg",
    description:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    name: "Star Wars",
    price: "23",
    category: "movie"
  },
  {
    src: "images/silicon-valley_653a_2560x1600.jpg",
    description:
      "Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper.",
    name: "The Sillicon Valley",
    price: "30", 
    category: "series"
  },
  {
    src: "images/sherlock_bdaa_2560x1600.jpg",
    description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    name: "Sherlock",
    price: "32", 
    category: "series"
  },
  {
    src: "images/fargo_5cbd_2560x1600.jpg",
    description:
      "Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota.",
    name: "Fargo",
    price: "22",
    category: "series"
  },
  {
    src: "images/black-mirror_642a_2560x1600.jpg",
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    name: "Black Mirror",
    price: "20",
    category: "series"
  },
  {
    src: "https://i.pinimg.com/originals/d5/19/97/d519972ba1e18ca1b631d157ddbaf98a.jpg",
    description:
      "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    name: "Mr Robot",
    price: "28",
    category: "series"
  },
  {
    src: "images/narcos_d88e_2560x1600.jpg",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    name: "Narcos",
    price: "17",
    category: "movie"
  },
  {
    src: "images/lights-out_dabb_2560x1600.jpg",
    description:
      "Rebecca must unlock the terror behind her little brother's experiences that once tested her sanity, bringing her face to face with a supernatural spirit attached to their mother.",
    name: "Lights Out",
    price: "20",
    category: "movie"
  },
  {
    src: "images/ex-machina_da61_2560x1600.jpg",
    description:
      "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    name: "Ex Machina",
    price: "15",
    category: "movie"
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
          {movies
        .slice(0, visible).map(({ src, description, name, price }, key) => (
            <CardItem
              key={`card-${name}`}
              src={src}
              description={description}
              name={name}
              price = {price}
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
