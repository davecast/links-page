import React from 'react';
import { ContainerStyled } from './styled';

const Container = ({ children }) => {
  return (
    <ContainerStyled>
      { children }
    </ContainerStyled>
  );
}
 
export default Container;