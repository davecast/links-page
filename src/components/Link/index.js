import React from 'react';

import { LinkStyled, LinkImage, LinkOver, LinkText, LinkDisabled, LinkMessage } from './styled';

const Link = ({ link, image, text, disabled}) => {
  return (
    <LinkStyled disabled={disabled} href={ !disabled ? link : '' }>
      <LinkImage src={image} alt={text} />
      <LinkOver color={text} />
      <LinkText>
        {text}
        {
          disabled && <LinkMessage>Próximamente</LinkMessage>
        }
      </LinkText>
      {
        disabled && <LinkDisabled />
      }
    </LinkStyled>
  );
}
 
export default Link;