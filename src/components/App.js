import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Header from "./Header";
import QuoteGroup from "./QuoteGroup";
import { COLOR, CONTENT_WIDTH, SPACING } from "../constants";
import fetchQuotes from "../fetchQuotes";

const StyledPageWrapper=styled.div`
  background: ${COLOR.BACKGROUND};
  min-height: 100vh;
`;

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`;

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loadingQuotes, setLoadingQuotes] = useState(false);

  const loadQuotes = () => {
    if (loadingQuotes) return;
    setLoadingQuotes(true);

    fetchQuotes().then(res => {
      setQuotes(res.data);
      setLoadingQuotes(false);
    });
  };

  return (
    <StyledPageWrapper>
      <Header/>
      <StyledContentWrapper>
        <Button onClick={loadQuotes}>{ loadingQuotes ? 'Loading...' : 'Load quotes' }</Button>
        { quotes.length ? <QuoteGroup quotes={quotes}/> : null }
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
};

export default App;
