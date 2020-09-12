import React from "react";
import Banner from "../../assets/images/banner2.jpg";
import Avatar from "../../assets/images/avatar1.jpg";

import {
  HeaderStyled,
  HeaderBanner,
  HeaderContent,
  HeaderInfo,
  HeaderAvatar,
  HeaderName,
  HeaderDescription,
  HeaderJob,
} from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderBanner background={Banner} />
      <HeaderContent>
        <HeaderInfo>
          <HeaderAvatar src={Avatar} alt="David Castillo" />
          <HeaderName>David Castillo</HeaderName>
          <HeaderJob>Desarrollador frontend <br />Diseñador gráfico  </HeaderJob>
          <HeaderDescription>Soy un apasionado por la enseñanza, y el desarrollo web. Quiero facilitarte el camino para iniciar esta carrera y puedas lograr tus metas.</HeaderDescription>
        </HeaderInfo>
      </HeaderContent>
    </HeaderStyled>
  );
};

export default Header;
