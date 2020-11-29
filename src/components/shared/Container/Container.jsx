import React from 'react';

import { StyledContainer } from './Container.styles';

const Container = ({children}) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export default Container;
