import React, {Component } from 'react';
import styled from 'styled-components';

//components
import MyAppbar from './appbar';
import Footer from './footer';
import ContentBlock from './block';
import CTA from './cta';
import { HeroSection, HeroTitle, ContentContainer } from './layout';

// Content
import { Projects, CallToAction } from '../content/Projects';
const ReactLogo = 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/logo192.png';

const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const heroSection = {
    name: 'Blind Munk Studios'
}

const CenterSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;
    
const CenterSectionBody = styled.div`
    margin-left: 3rem;
    margin-right: 3rem;
`;

const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
`;

const LeftSectionBody = styled.div`
    margin-left: 3rem;
    margin-right: 3rem;
`;

const StyledImage = styled.div`
    width: 100%;
    height: auto;
`;

export default function BaseLayout() {
    return (
            <AppContainer>
                <MyAppbar />
                <HeroSection>
                    <div className="Colour-Bar"></div>
                    <HeroTitle>
                        {heroSection.name}
                    </HeroTitle>
                </HeroSection>

                <ContentContainer>
                    <CenterSection>
                        <StyledImage>
                            <img src={ReactLogo} />
                        </StyledImage>
                        <CenterSectionBody>
                            <h3>Heading</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).</p>
                        </CenterSectionBody>
                    </CenterSection>
                </ContentContainer>

                <ContentContainer>
                    <CTA>
                        {CallToAction}
                    </CTA>
                </ContentContainer>

                <ContentContainer>
                    <LeftSection>
                        <StyledImage>
                            <img src={ReactLogo} />
                        </StyledImage>
                        <LeftSectionBody>
                            <h3>Heading</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).</p>
                        </LeftSectionBody>
                    </LeftSection>
                </ContentContainer>

                <ContentContainer>
                    <LeftSection>
                        <LeftSectionBody>
                            <h3>Heading</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).</p>
                        </LeftSectionBody>
                        <StyledImage>
                            <img src={ReactLogo} />
                        </StyledImage>
                    </LeftSection>
                </ContentContainer>

                <ContentContainer>
                    <ContentBlock>
                        {Projects}
                    </ContentBlock>
                </ContentContainer>
                <ContentContainer>
                    <CTA>
                        {CallToAction}
                    </CTA>
                </ContentContainer>
                <Footer />
            </AppContainer>
        );
};