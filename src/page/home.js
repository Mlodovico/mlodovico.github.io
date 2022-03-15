import React from 'react';
import {
  Container,
  Text,
  Wrapper,
  HeaderWrapper,
  BodyWrapper,
  FooterWrapper,
  LogoImageIcon,
} from './styles';

import linkedinLogo from '../assets/images/linkedin_icon.png';
import instagramLogo from '../assets/images/instagram_icon.png';
import facebookLogo from '../assets/images/facebook_icon.png';

function App() {
  return (
    <Container>
      <HeaderWrapper>
        <Text>Portifolio</Text>
      </HeaderWrapper>
      <Wrapper>
        <BodyWrapper>
          <Text>Murilo Lodovico</Text>
          <Text>
            Muito prazer em conhecer a quem chega no meu portifolio, aqui estarei
            apresentando alguns dos meus conhecimentos afim de mostrar minha desenvoltura
            em relacao ao desenvolvimento de software.
          </Text>
        </BodyWrapper>
      </Wrapper>
      <FooterWrapper>
        <LogoImageIcon src={linkedinLogo} />
        <LogoImageIcon src={instagramLogo} />
        <LogoImageIcon src={facebookLogo} />
      </FooterWrapper>
    </Container>
  );
}

export default App;
