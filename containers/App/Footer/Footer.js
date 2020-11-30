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
          <h1>Follow us</h1>
          <h5>+44 8003 5535NN </h5>
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
          <h1>Help</h1>
          <h3>Contact us</h3>
          <h3>Delivery information</h3>
          <h3>Payment information</h3>
          <h3>FAQ </h3>
        </Column>
        <Column>
          <h1>Aobut us</h1>
          <h3>Our stores</h3>
          <h3>Site map</h3>
        </Column>
        <Column>
          <h1>Legal</h1>
          <h3>Privacy policy</h3>
          <h3>Terms & Conditions</h3>
          <h3>Cookie policy</h3>
        </Column>
        </ColumnsContainer>
        <h4>© Copyright,  2020</h4>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

