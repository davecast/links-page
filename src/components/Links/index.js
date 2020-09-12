import React from 'react';
import Instagram from '../../assets/images/links/instagram.jpg';
import Facebook from '../../assets/images/links/facebook.jpg';
import Github from '../../assets/images/links/github.jpg';
import Twitter from '../../assets/images/links/twitter.jpg';
import Patreon from '../../assets/images/links/patreon.jpg';
import Twitch from '../../assets/images/links/twitch.jpg';
import Web from '../../assets/images/links/web.jpg';
import Youtube from '../../assets/images/links/youtube.jpg';

import Link from '../Link';

import { LinksStyled, LinksGrid } from './styled';

const Links = () => {
  return (
    <LinksStyled>
      <LinksGrid>
        <Link 
          link="https://www.instagram.com/davecast/"
          image={Instagram}
          text="instagram"
        />
        <Link 
          link="https://www.facebook.com/davecast.works/"
          image={Facebook}
          text="facebook"
        />
        <Link 
          link="https://twitter.com/davecast_"
          image={Twitter}
          text="twitter"
        />
        <Link 
          link="https://davecastworks.com/"
          image={Web}
          text="web"
        />
        <Link 
          disabled
          link="https://www.twitch.tv/dave_cast"
          image={Twitch}
          text="twitch"
        />
        <Link 
          disabled
          link="https://www.youtube.com/channel/UCn545IXIv68jO9C9e5lj-og"
          image={Youtube}
          text="youtube"
        />
        <Link 
          disabled
          link="https://www.patreon.com/davecast"
          image={Patreon}
          text="patreon"
        />
        <Link 
          link="https://github.com/davecast"
          image={Github}
          text="github"
        />
      </LinksGrid>
    </LinksStyled>
  );
}
 
export default Links;