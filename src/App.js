import React, { Children } from 'react';
// add react router to habdle navigation between pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/main';
import ErrorPage from './pages/error-page';
import ProjectsPage from './pages/projects';

// constants
// import { MAIN_URL, PROJECTS_URL, ABOUT_URL, CONTACT_URL } from './constants/urls';

import './App.scss';

// components

// Content

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects',
        element: <ProjectsPage />
      }

    ]
  },
]);

function App() {
  
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
