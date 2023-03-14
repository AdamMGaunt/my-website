import React, {Component } from 'react';
import styled from 'styled-components';

//components
import MyAppbar from './appbar';
import Footer from './footer';
import ContentBlock from './block';
import CTA from './cta';
import { HeroSection, HeroTitle, HeroSubheading, ContentContainer, CenterSection, CenterSectionBody, LeftSection, LeftSectionBody } from './layout';

// Content
import { Projects, CallToAction } from '../content/Projects';
const UX_IMAGE = 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/uxdesign.jpg';
const UI_IMAGE = 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/application.jpg';

const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const heroSection = {
    name: 'Blind Munk Studios',
    subheading: 'Welcome! I am always updating so check back often'
}

const StyledImage = styled.div`
    width: 100%;    
    height: auto;
    padding: 1rem;
    img {    
        width: 50vw;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
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
                    <HeroSubheading>
                        {heroSection.subheading}
                    </HeroSubheading>
                </HeroSection>

                <ContentContainer>
                    <CenterSection>
                        <StyledImage>
                            <img width='100%' src={UX_IMAGE} />
                        </StyledImage>
                        <CenterSectionBody>
                            <h3>UX Design</h3>
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
                            <img width='100%' src={UI_IMAGE} />
                        </StyledImage>
                        <LeftSectionBody>
                            <h3>UI Development</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).</p>
                        </LeftSectionBody>
                    </LeftSection>
                </ContentContainer>

                <ContentContainer>
                    <CenterSection>
                        <h1>Recent Projects</h1>
                    </CenterSection>
                    <ContentBlock>
                        {Projects}
                    </ContentBlock>
                </ContentContainer>
                <ContentContainer>
                    <CTA>
                        {CallToAction}
                    </CTA>
                </ContentContainer>
                <ContentContainer>
                    <h3>Contact</h3>
                    <p>Contact form is currently in development :)</p>
                </ContentContainer>
                <Footer />
            </AppContainer>
        );
};