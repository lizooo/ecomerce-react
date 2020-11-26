import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri'
import { StyledFooter, FooterWrapper, ColumnsContainer, Column, Icons, Icon } from './Footer.styled'

function Footer(){
  return(
    < StyledFooter>
      <FooterWrapper>
        <ColumnsContainer>
        <Column>
          <h1>Title</h1>
          <h5>nn-nn-nn</h5>
          <Icons>
              <Icon>
                < AiOutlineInstagram className="footer__icons-item"/>
              </Icon>
              < Icon>
                < AiOutlineWhatsApp className="footer__icons-item"/>
              </Icon>
              <Icon>
                < RiFacebookCircleFill className="footer__icons-item"/> 
              </Icon>          
          </Icons> 
        </Column>
        <Column>
          <h1>Title</h1>
          <h3>Item1</h3>
          <h3>Item1</h3>
          <h3>Item1</h3>
          <h3>Item1</h3>
        </Column>
        <Column>
          <h1>Title</h1>
          <h3>Item1</h3>
          <h3>Item1</h3>
          <h3>Item1</h3>
          <h3>Item1</h3>
        </Column>
        <Column>
          <h1>Title</h1>
          <h3>Item1</h3>
          <h3>Item1</h3>
          <h3>Item1</h3>
          <h3>Item1</h3>
        </Column>
        </ColumnsContainer>
        <h4>© Copyright,  2020</h4>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

