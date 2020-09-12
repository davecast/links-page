import React from 'react';
import {Helmet} from "react-helmet";

import Header from './components/Header';
import Links from './components/Links';

const title = (
  <Helmet>
    <title>Linkstree | Davecast</title>
    <meta name="description" content="Lista de links de mis redes sociales y canles de comunicación" />
  </Helmet>
);

function App() {
  return (
    <>
      {title}
      <Header /> 
      <Links />
    </>
  );
}

export default App;
