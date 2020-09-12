import styled from 'styled-components';

export const HeaderStyled = styled.header`

`
export const HeaderBanner = styled.div`
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  width: 100%;

`

export const HeaderContent = styled.div`
  max-width: 595px;
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ theme }) => theme.colors.white};
  margin: -30px auto 0;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  box-shadow: 0px -20px 20px rgba(0,0,0,0.05);
  padding: 0 20px;
  @media screen and (min-width: 980px) {
    max-width: 768px;
  }
`
export const HeaderInfo = styled.div`
  transform: translateY(-48px);
`
export const HeaderAvatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 30px;
  margin: 0 auto;
  display: block;
  margin: 0 auto 20px;
`
export const HeaderName = styled.h1`
  color: ${({ theme }) => theme.colors.brand};
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 28px;
  line-height: 28px;
  margin: 0 0 5px;
  font-weight: bold;
  `
export const HeaderJob = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  margin: 0 auto 15px;
`

export const HeaderDescription = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  margin: 0 auto;
  max-width: 400px;
`