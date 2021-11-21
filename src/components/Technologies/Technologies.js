import React from 'react';
import { DiFirebase, DiReact, DiUnitySmall } from 'react-icons/di';
import { SiBlender } from 'react-icons/si';
import { FaPeopleCarry } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { icons } from 'react-icons/lib';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I work with a range of technologies in both XR app development as well as full-stack web development
    </SectionText>
    <List>
        <ListItem>
          <DiUnitySmall size="3rem" />
          <ListContainer>
            <ListTitle>VR App Dev</ListTitle>
            <ListParagraph>
              Experience with <br />
              Unity3D and VR Frameworks
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <FaPeopleCarry size="3rem" />
          <ListContainer>
            <ListTitle>Multiplayer Networking</ListTitle>
            <ListParagraph>
              Experience with <br />
              Photon PUN2
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiBlender size="3rem" />
          <ListContainer>
            <ListTitle>3D Art Creation</ListTitle>
            <ListParagraph>
              Experience with <br />
              Blender and Substance Painter
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End Web Dev</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js and Next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End Web Dev</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node, Express, MongoDB, and AWS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <AiOutlineMobile size="3rem" />
          <ListContainer>
            <ListTitle>Mobile App Dev</ListTitle>
            <ListParagraph>
              Experience with <br />
              React Native
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
