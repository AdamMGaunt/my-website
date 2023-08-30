import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Pages
import MainPage from './pages/main';

// Components
import MyAppbar from './components/appbar';
import Footer from './components/footer';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Modal from './components/Modal';
import Contact from './components/Contact';

// Content
import { Images } from './content/Projects';

// CSS
import './App.scss';

const ApplicationContainer = styled.div `
  background-image: url(${Images.BackgroundImage});
  background-repeat: repeat-y;
  bockground-color: #000000;
  postion: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Overlay = styled.div`
  background-color: rgba(255,255,255,0.87);
  position: absolute;
  height: 100%;
  width: 100%;
`;

const App: React.FC = () => {
  
  return (
    <>
      <MyAppbar />
      <ApplicationContainer>
        <Overlay />
        <Hero />
        <FeatureGrid />
        <MainPage />
        <Contact />
        <Footer />
      </ApplicationContainer>
    </>
  );
}

export default App;
