import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ReactLenis } from '@studio-freight/react-lenis'

// animatecss
import 'animate.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './redux/app/store.jsx'
import { Provider } from 'react-redux'

import MainLayout from './layouts/MainLayout.jsx'
import MainPage from './pages/MainPage.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx'


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/yetenekler',
        element: <Skills />
      },
      {
        path: '/projeler',
        element: <Projects />
      },
      {
        path: '/projeler/:id',
        element: <ProjectDetail />
      },
      {
        path: '/iletisim',
        element: <ContactPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('emirinanerdev')).render(
  <ReactLenis root>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ReactLenis>,
)
