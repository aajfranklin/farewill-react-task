import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

import Quote from "./Quote";
import { CONTENT_WIDTH, SPACING } from "../constants";

const SyltedQuoteGroup = styled.div`
  column-gap: ${SPACING.S};
  display: grid;
  padding: ${SPACING.L} 0;
  row-gap: ${SPACING.S};
  
  @media (min-width: ${CONTENT_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const QuoteGroup = ({ quotes }) => {
  return (
    <SyltedQuoteGroup>
      { quotes.map(quote => <Quote quote={quote} key={uuidv4()}/>) }
    </SyltedQuoteGroup>
  );
};

export default QuoteGroup;
