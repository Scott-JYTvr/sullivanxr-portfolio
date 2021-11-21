import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';
import { Span, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is <Span color="white">Scott Sullivan</Span> and I am an XR developer with a passion for building a community and sharing what I've learned about programming XR interactions
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;