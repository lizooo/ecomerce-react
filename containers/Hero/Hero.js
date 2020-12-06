import React from 'react';
import Button from '../../components/Button/Button'
import '../../components/Button/Button'
import { HeroWrapper, StyledHero } from './Hero.styled'


function Hero(){
  return(
  <StyledHero>
    <HeroWrapper>
      <div>
        <h1 >Star Wars: The Last Jedi</h1>
        <p>Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.</p>
        < Button ActionCall="Buy"/>
      </div>
    </HeroWrapper>
  </StyledHero>
  );
  }
export default Hero;