import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import './styles/index.css';
import './styles/circle-menu.css';
import './styles/home.css';
import './styles/diagonal-circle-menu.css';
import './styles/explore.css'

import Home from './pages/home';
import Before from './pages/before';
import Building from './pages/building';
import Raid from './pages/raid';
import Credits from './pages/credits';
import After from './pages/after';

import Entrance from './rooms/entrance';
import Threshold from './rooms/threshold';
import DanceFloor from './rooms/dance-floor';
import Pool from './rooms/pool';
import Staircases from './rooms/staircases';
import CatWalk from './rooms/cat-walk';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'before',
    element: <Before />
  },
  {
    path: 'building',
    element: <Building />
  },
  {
    path: 'raid',
    element: <Raid />
  },
  {
    path: 'explore/',
    element: <Outlet />,
    children: [
      {
        path: 'entrance',
        element: <Entrance />
      },
      {
        path: 'threshold',
        element: <Threshold />
      },
      {
        path: 'dance-floor',
        element: <DanceFloor />
      },
      {
        path: 'pool',
        element: <Pool />
      },
      {
        path: 'staircases',
        element: <Staircases />
      },
      {
        path: 'cat-walk',
        element: <CatWalk />
      }
    ]
  },
  {
    path: 'credits',
    element: <Credits />
  },
  {
    path: 'after',
    element: <After />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
