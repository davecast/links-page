import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  p {
    margin: 0;
  }
`;

const theme = {
  colors: {
    white: '#ffffff',
    brand: '#0099cc',
    grey: '#bdbdbd',
    greyLight: '#ececec',
    instagram: '#ba1a7d',
    facebook: '#0e8ef1',
    twitter: '#1da1f2',
    twitch: '#9147ff',
    patreon: '#f96854',
    github: '#24292e',
    web: '#0099cc',
    youtube: '#f00',
  },
};

export default theme
