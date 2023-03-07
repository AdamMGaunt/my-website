import React, {Component } from 'react';
import styled from 'styled-components';

//components
import { Section, Title } from './components/layout';

const MainPage = {
    render () {
        return (
            <div>
                <Title className="App-header">
                    <h1>Blind Munk Studios</h1>
                    <div className="Colour-Bar"></div>
                </Title>
                <Section>
                    <ContentBlock />
                </Section>
            </div>
        )
    }
};

export default MainPage;