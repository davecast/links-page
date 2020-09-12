import styled from 'styled-components';

export const LinksStyled = styled.div`
  max-width: 595px;
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ theme }) => theme.colors.white};
  margin: -20px auto 60px;
  padding: 30px 20px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  @media screen and (min-width: 980px) {
    max-width: 768px;
  }
`

export const LinksGrid = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 0 auto;
  @media screen and (min-width: 980px) {
    max-width: 768px;
    grid-template: 1fr / 1fr 1fr 1fr;
  }
`