import React from "react";
import { Link } from 'react-router-dom';

const EntranceDoor = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="297.64"
      height="491.117"
      fillRule="nonzero"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipRule="evenodd"
      version="1.1"
      viewBox="0 0 297.64 491.117"
      xmlSpace="preserve"
      className='clickable'
    >
      <g transform="translate(-1482.08 -1621.193)">
      <path
          fill="rgba(0,0,0,0)"
          stroke="#ff5c97"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          d="M1631.11 1627.03c-32.67 2.8-38.87 2.42-40.74 5.68-1.87 3.27-10.41 19.64-15.54 33.17-5.13 13.54-14.7 45.74-28.7 96.6-14 50.87-24.97 97.54-32.9 140-7.93 42.47-13.53 75.84-16.8 100.1-3.27 24.27-2.64 34.66-4.04 35.59-1.4.94-5.51 2.5-5.74 5.89-1.15 16.54-5.05 23.54 2.29 24.9 31.12 5.73 23.31 3.08 129.25 18.01 52.96 7.47 159.03 22.84 159.03 22.84s-19.94-156.76-47.19-286.38c-24.78-117.83-53.15-187.51-58.73-198.8-1.04-2.09-7.52-.4-40.19 2.4z"
          className='object-glow-1'
        ></path>
        <Link to='/explore/threshold'>
          <path
            fill="rgba(0,0,0,0)"
            stroke="#ff5c97"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            d="M1631.11 1627.03c-32.67 2.8-38.87 2.42-40.74 5.68-1.87 3.27-10.41 19.64-15.54 33.17-5.13 13.54-14.7 45.74-28.7 96.6-14 50.87-24.97 97.54-32.9 140-7.93 42.47-13.53 75.84-16.8 100.1-3.27 24.27-2.64 34.66-4.04 35.59-1.4.94-5.51 2.5-5.74 5.89-1.15 16.54-5.05 23.54 2.29 24.9 31.12 5.73 23.31 3.08 129.25 18.01 52.96 7.47 159.03 22.84 159.03 22.84s-19.94-156.76-47.19-286.38c-24.78-117.83-53.15-187.51-58.73-198.8-1.04-2.09-7.52-.4-40.19 2.4z"
            opacity="1"
            className='object-glow'
          ></path>
        </Link>
      </g>
    </svg>
  );
}

export default EntranceDoor;