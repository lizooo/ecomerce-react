import React from "react";
import CardItem from "./CardItem.js";
import Button from "./Button.js";
import { StyledCards, CardsContainer, ButonContainer } from "./Cards.styled";

function Cards() {
  return (
    <div>
      <StyledCards>
        <h1>Trending This Week</h1>
        <CardsContainer>
          <CardItem
            src="images/star-wars-the-last-jedi_874d_2560x1600.jpg"
            description="Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order."
            name="Star Wars"
          />
          <CardItem
            src="images/silicon-valley_653a_2560x1600.jpg"
            description="Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper."
            name="The Sillicon Valley"
          />
          <CardItem
            src="images/sherlock_bdaa_2560x1600.jpg"
            description="A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."
            name="Sherlock"
          />
        </CardsContainer>
      </StyledCards>
      <StyledCards>
        <h1>Trending This Week</h1>
        <CardsContainer>
          <CardItem
            src="images/fargo_5cbd_2560x1600.jpg"
            description="Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota."
            name="Fargo"
          />
          <CardItem
            src="images/black-mirror_642a_2560x1600.jpg"
            description="An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide."
            name="Black Mirror"
          />
          <CardItem
            src="images/mr-robot_6529_2560x1600.jpg"
            description="Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for."
            name="Mr Robot"
          />
        </CardsContainer>
        <ButonContainer>
          <Button ActionCall="Load More" />
        </ButonContainer>
      </StyledCards>
    </div>
  );
}

export default Cards;
