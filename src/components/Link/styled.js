import styled from 'styled-components';


export const LinkImage = styled.img`
 max-width: 100%;
 transition: all .3s ease-in;
`
export const LinkOver = styled.div`
  background-color: ${({ color, theme }) => theme.colors[color]};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.7;
  transition: all .3s ease-in;
  &::before {
    content: "";
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease-in;
  }
`

export const LinkStyled = styled.a`
  display: block;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  :hover {
    
    ${({ disabled }) => {
      if (!disabled) {
        return `
          ${LinkOver} {
            opacity: 0.9;
            &::before {
              background-color: rgba(0,0,0,0.1);
            }
          }
          ${LinkImage} {
            transform: scale(1.1);
          }
        `
      }
    }}
  }
`

export const LinkText = styled.p`
  text-transform: capitalize;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  z-index: 4;
  color:  ${({ color, theme }) => theme.colors.white}; 
`
export const LinkDisabled = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #8e8e8e;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  cursor: not-allowed; 
`

export const LinkMessage = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #e0e0e0;
  font-weight: normal;
`