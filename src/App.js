import React from 'react';
// add react router to habdle navigation between pages
// import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// constants
import { MAIN_URL, PROJECTS_URL, ABOUT_URL, CONTACT_URL } from './constants/urls';

import './App.scss';

// components
import MyAppbar from './components/appbar';
import ContentBlock from './components/block';
import Footer from './components/footer';
import { Section, Title } from './components/layout';
import BaseLayout from './components/baseLayout';

// Content

function App() {
  
  return (
    <BaseLayout>
    </BaseLayout>
  );
}

export default App;
