import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
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
import Explore from './pages/explore';
import Credits from './pages/credits';
import After from './pages/after';

import Pool from './rooms/pool';

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
    path: 'explore',
    element: <Explore />
  },
  {
    path: 'explore/pool',
    element: <Pool />
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
