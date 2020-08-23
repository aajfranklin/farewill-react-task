import React from "react";
import styled from "styled-components";

import { BORDER, COLOR, CONTENT_WIDTH, FONT, SPACING } from "../constants";

const StyledQuote = styled.div`
  align-items: center;
  background: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GREY.LIGHT};
  border-radius: ${BORDER.RADIUS.M};
  box-shadow: ${BORDER.SHADOW.M};
  display: flex;
  flex-direction: column;
  grid-column-end: span 1;
  padding: ${SPACING.M};
  
  @media (min-width: ${CONTENT_WIDTH}) {
    flex-direction: ${props => props.flexDirection};
  }
`;

const StyledQuoteText = styled.p`
  font-size: ${FONT.SIZE.M};
  line-height: 1.5;
  text-align: center;
    
  @media (min-width: ${CONTENT_WIDTH}) {
    text-align: start;
    width: 67%;
  }
`;

const StyledQuoteImage = styled.img`
  height: 10em;
  object-fit: scale-down;
  
  @media (min-width: ${CONTENT_WIDTH}) {
    width: 33%;
  }
`;

const Quote = ({ quote }) => {
  return (
    <StyledQuote flexDirection={quote.characterDirection === 'Left' ? 'row' : 'row-reverse'}>
      <StyledQuoteImage src={quote.image} alt={quote.character}/>
      <StyledQuoteText>{quote.quote}</StyledQuoteText>
    </StyledQuote>
  );
};

export default Quote;
