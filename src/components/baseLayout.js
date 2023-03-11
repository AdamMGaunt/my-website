import React, {Component } from 'react';
import styled from 'styled-components';

//components
// import MyAppbar from './appbar';
import Footer from './footer';
import ContentBlock from './block';
import CTA from './cta';
import { HeroSection, HeroTitle, ContentContainer } from './layout';

import { Projects, CallToAction } from '../content/Projects';

const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const heroSection = {
    name: 'Blind Munk Studios'
}

export default function BaseLayout() {
    return (
            <AppContainer>
                <HeroSection>
                    <div className="Colour-Bar"></div>
                    <HeroTitle>
                        {heroSection.name}
                    </HeroTitle>
                </HeroSection>
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