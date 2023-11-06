import * as React from "react";
import styled from "styled-components";

import { DividerVertical, ContentContainer, DividerHorizontal } from "../components/layout";

// Content
import { AboutContent } from "../content/About";

const AboutSection = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20vw;
  @media (max-width: 768px) {
    padding:  0 10vw;
}
`;

const About: React.FC = () => {
  return (
    <>
    <ContentContainer>
      <AboutSection id="About">
        <h1>{AboutContent.heading}</h1>
        <p>{AboutContent.content}</p>
      </AboutSection>
    </ContentContainer>
    </>
  )
}
export default About;