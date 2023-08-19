import * as React from 'react';
import styled from 'styled-components';

// Pages
import MainPage from './pages/main';

// Components
import MyAppbar from './components/appbar';
import Footer from './components/footer';
import Hero from './components/Hero';

// Content
import { Images } from './content/Projects';

// CSS
import './App.scss';

const ApplicationContainer = styled.div `
  background-image: url(${Images.BackgroundImage});
  background-repeat: no-repeat;
  postion: relative;
`;

const App: React.FC = () => {
  
  return (
    <>
      <MyAppbar />
      <ApplicationContainer>
        <Hero />
        <MainPage />
        <Footer />
      </ApplicationContainer>
    </>
  );
}

export default App;
