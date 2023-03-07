import { AppBar } from '@mui/material';
import React, {Component } from 'react';
import styled from 'styled-components';

//components
import MyAppbar from './appbar';
import Footer from './footer';
import { HeroSection, HeroTitle, ContentContainer } from './layout';

const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

const heroSection = {
    name: 'Blind Munk Studios'
}
export default function BaseLayout( {content} ) {
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
                    {content}
                </ContentContainer>
                <Footer />
            </AppContainer>
        );
};