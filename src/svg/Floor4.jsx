import React from "react";
import { Link } from 'react-router-dom';

const Floor4 = ({ currentRoom, setHoveredRoom }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipRule="evenodd"
      viewBox="0 0 250 500"
    >
      {/* Base White */}
      <path
        fill="#fff"
        d="M24 42v148H8v101h106v-9h15v-68h8v22h52v35h32v-35h18V22h-68l-16 17v-8H41v11H24z"
      ></path>
      {/* PHOTO BOOTH/TEMPLE */}
      <Link to='/explore/photo-booth-temple'>
        <path
          id='photo-booth-temple-path'
          fill="#ff5c97"
          d="M54 228v14h-8v13h8v16h65v-45h-16v1h-2v1H54z"
          className={`clickable ${currentRoom === 'photo-booth-temple' ? 'current-room' : ''}`}
          onMouseEnter={() => setHoveredRoom('photo-booth-temple')}
          onMouseLeave={() => setHoveredRoom(null)}
        ></path>
      </Link>
      {/* Int. Grey */}
      <g fill="#adadad">
        <path d="M93 44h10v10h2V44h16v10h15v67h-2v2h2v2h3V54h7v-8h23v8h9v12h3V53l21-20h24v45h-49v43h-2v3h38v14h-9v3h22v83h-6v47h-27v-44h9v1h1v-4h-14v-83h4v-3h-9v3h2v21h-35v-21h22v-3h-43v3h18v21h-33v-26h-3v69h7v21h-16v-1H46v-14h10v-7h34v1h6v-2h-3v-79h19v2h3v-2h8v-3H93V44z"></path>
        <path d="M180 81v40h46V81h-46z"></path>
      </g>
      {/* Int. Outline */}
      <g fill="none" stroke="#000" style={{pointerEvents: 'none'}}>
        <path
          strokeDasharray="2.0,2.0"
          strokeWidth="0.5"
          d="M90 41H50v10H32h0v152h12l46-46M32 203H21v77h81l11 10M21 203L9 191M21 280L9 290"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M220 235v-8h9v-89h-13v-14h13V30h0-28l-22 21h0-7v-8h-29v8h-19V41H90h0"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M90 41v160H53v7H43v20h8v11h-8v19h8v16h71v-72h-7v-37h71v62h16v1"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M226 33h-24l-21 20v13h-3V54h-9v-8h-23v8h-7v71h-3v-2h-2v-2h2V54h-15V44h-16v10h-2V44H93v77h30v3h-8v2h-3v-2H93h0v79h3v2h-6v-1H56v7H46v14h57v2h-2v1H54v14h-8v13h8v16h65v-66h-11M119 226h-4"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M112 205v-69h3v26h33v-21h0-18 0v-3h43v3h-22v21h35v-21h-2v-3h9v3h-4 0v83h14v4h-1v-1h-9M115 140h3"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M215 224h11v-83h-22v-3h9v-14h-38v-3h2V78h49V33"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M226 81v40h-46V81h46z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="2"
          d="M169 162v-21"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M193 227v43M193 244h27M206 244v27M193 247.6h13M193 254.8h13M193 258.4h13M193 262h13M193 251.2h13"
        ></path>
        <path
          strokeLinejoin="miter"
          d="M215 224l-7 7M115 226l-7 7M108 205l-7 7M118 140l6 8M134 121l-7-7"
        ></path>
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="M69 204v11h24v-10M72 204v11M75 204v11M78 204v11M81 204v11M84 204v11M87 204v11M90 205v10-10z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M220 224v12"
        ></path>
      </g>
      {/* Base Outline */}
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="3"
        d="M189 236v35h32v-35h18V22h-68 0l-16 17v-8H41v11H24v148h0H8v101h106v-9h15v-68h8v22h52z"
      ></path>
      {/* Icons */}
      <g>
        <path
          fill="#fff"
          stroke="#8f1442"
          strokeWidth="0.5"
          d="M194 233.037h14.216v9.352H194v-9.352z"
        ></path>
        <path fill="#8f1442" d="M200.577 233h7.628v9.39h-7.628V233z"></path>
        <g fill="#8f1442">
          <path d="M197.014 236.034c-.066-.134-.203-.182-.275-.134l-.524.352c-.072.048-.038.242.01.314l1.121 1.795c.049.072.11.096.182.047l.346-.212c.301-.256.245-.48.078-.769l-.938-1.393zm-1.034-1.184a.529.529 0 11-.002 1.058.529.529 0 01.002-1.058z"></path>
          <path d="M196.81 235.872l.951-.207c.074-.015.15 0 .212.041l.782.605c.129.111.252.25.167.375-.054.081-.24.035-.337-.024l-.821-.436-.837.182a.273.273 0 01-.326-.209.275.275 0 01.209-.327zm1.479 2.308l.312.434s.82.057 1.113.074c.224.014.359.097.359.243 0 .145-.114.227-.437.253-.273.021-1.205.078-1.205.078h-.003a.364.364 0 01-.297-.168l-.305-.45c.001 0 .432-.292.463-.464zm-2.049.313l.955-.654a.33.33 0 01.458.085.33.33 0 01-.086.458l-.729.499.433 1.07c.163.392.12.56.008.607-.112.047-.262.026-.495-.401l-.659-1.258a.33.33 0 01.115-.406z"></path>
          <path d="M195.102 237.268l.673-.057.385-.872a.274.274 0 11.5.224l-.418.937c-.039.088-.128.173-.223.184 0 0-.667-.014-.85-.024-.191-.011-.405-.046-.41-.177-.007-.188.171-.202.343-.215z"></path>
        </g>
        <path
          fill="#fff"
          d="M206.354 238.544a1.842 1.842 0 01-3.683 0c0-1.381 1.688-2.532 1.688-3.836.383.191.997.869.997 1.764 0 .384-.076.768-.076.768.46-.154.46-.691.46-.691s.614.844.614 1.995z"
        ></path>
        <path
          fill="#8f1442"
          d="M204.499 236.942a.038.038 0 00-.041-.006.038.038 0 00-.022.035c0 .577-.3 1.004-.564 1.381-.223.318-.434.618-.434.959a1.075 1.075 0 002.148 0c0-1.42-1.076-2.36-1.087-2.369z"
        ></path>
        <path
          fill="#fff"
          d="M204.582 238.1a.038.038 0 00-.043-.014.037.037 0 00-.027.036c0 .349-.184.598-.361.839-.169.23-.329.447-.329.734a.692.692 0 001.381 0c0-.482-.209-1.018-.621-1.595z"
        ></path>
        <path
          fill="#1f212b"
          d="M205.256 238.084a.037.037 0 01-.034-.022l-.037-.076a.039.039 0 01.017-.052.039.039 0 01.051.017l.038.078a.038.038 0 01-.018.051.035.035 0 01-.017.004zm.175.46a.039.039 0 01-.037-.027 3.213 3.213 0 00-.106-.304.038.038 0 01.021-.05.04.04 0 01.05.021c.041.101.078.206.109.311a.04.04 0 01-.026.048l-.011.001z"
        ></path>
        <path
          fill="#1f212b"
          d="M204.512 240.386a1.076 1.076 0 01-1.074-1.075c0-.341.211-.641.434-.959.264-.377.564-.804.564-1.381 0-.015.008-.028.022-.035a.038.038 0 01.041.006c.015.013.368.32.671.854a.039.039 0 01-.014.053.04.04 0 01-.053-.015 3.563 3.563 0 00-.593-.777c-.027.558-.318.972-.575 1.339-.226.321-.42.598-.42.915a.999.999 0 001.995 0c0-.111-.007-.223-.022-.34a.038.038 0 01.033-.043.039.039 0 01.043.033c.015.121.022.236.022.35 0 .593-.481 1.075-1.074 1.075z"
        ></path>
        <path
          fill="#1f212b"
          d="M205.018 239.005a.039.039 0 01-.036-.025l-.03-.076a.039.039 0 01.02-.05.039.039 0 01.051.021l.031.078a.039.039 0 01-.023.049.03.03 0 01-.013.003zm-.1-.231a.038.038 0 01-.034-.021 3.646 3.646 0 00-.078-.152.038.038 0 01.016-.052.039.039 0 01.052.015c.028.052.054.104.079.155a.038.038 0 01-.018.051.035.035 0 01-.017.004z"
        ></path>
        <path
          fill="#1f212b"
          d="M204.512 240.386c-.38 0-.69-.31-.69-.691 0-.287.16-.504.329-.734.177-.241.361-.49.361-.839 0-.017.011-.031.027-.036a.037.037 0 01.043.014c.049.069.1.145.155.232a.039.039 0 01-.012.053.039.039 0 01-.053-.012 5.586 5.586 0 00-.089-.137c-.034.314-.205.546-.37.771-.162.219-.315.426-.315.688a.615.615 0 001.228 0c0-.084-.007-.172-.021-.263a.038.038 0 01.032-.043.04.04 0 01.044.032c.014.094.022.186.022.274 0 .381-.31.691-.691.691z"
        ></path>
        <g
          fill="none"
          stroke="#8f1442"
          strokeLinejoin="miter"
          strokeWidth="0.75"
        >
          <path d="M201 242v24M198 263l3 3 3-3"></path>
        </g>
        <g
          fill="none"
          stroke="#8f1442"
          strokeLinejoin="miter"
          strokeWidth="0.75"
        >
          <path d="M92 210H71M89 213l3-3-3-3"></path>
        </g>
      </g>
    </svg>
  );
}

export default Floor4;