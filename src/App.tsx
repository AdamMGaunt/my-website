import * as React from 'react';

// Pages
import MainPage from './pages/main';

// Components
import MyAppbar from './components/appbar';
import Footer from './components/footer';
import Hero from './components/Hero';

// CSS
import './App.scss';

const App: React.FC = () => {
  
  return (
    <>
      <MyAppbar />
      <Hero />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
