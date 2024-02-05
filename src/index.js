import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import './styles/index.css';
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
import LockerRoom from './rooms/locker-room';
import GroupSexRoom from './rooms/group-sex-room';
import PrivateRooms from './rooms/private-rooms';
import PhotoBoothTemple from './rooms/photo-booth-temple';

const loadObjectEvents = (room, ids, setHoveredSoundbiteID, setClickedSoundbiteID) => {
  for (const id of ids) {
    const el = document.getElementById(`${room}-${id}-outline`);
    el.addEventListener('mouseenter', () => setHoveredSoundbiteID(id));
    el.addEventListener('mouseleave', () => setHoveredSoundbiteID(null));
    el.addEventListener('click', () => setClickedSoundbiteID(id));
    el.addEventListener('keypress', e => {
        if (e.key === ' ' || e.key === 'Enter') {
            el.click();
            document.getElementById('play-pause-button').focus();
        }
    });
  }
}

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
        element: <Threshold loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'dance-floor',
        element: <DanceFloor loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'pool',
        element: <Pool loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'staircases',
        element: <Staircases loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'cat-walk',
        element: <CatWalk loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'locker-room',
        element: <LockerRoom loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'group-sex-room',
        element: <GroupSexRoom loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'private-rooms',
        element: <PrivateRooms loadObjectEvents={loadObjectEvents}/>
      },
      {
        path: 'photo-booth-temple',
        element: <PhotoBoothTemple loadObjectEvents={loadObjectEvents}/>
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
