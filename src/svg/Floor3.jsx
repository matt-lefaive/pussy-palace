import React from "react";
import { Link } from 'react-router-dom';

const Floor3 = ({ currentRoom, setHoveredRoom }) => {
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
        d="M50 53V42h50v10h17v-7h33v7h8l21-21h30l22 21h5v187h-23v59h-36v-59h-27v-24h-43v83H15v-89h16v-30l-6-8v-20l6-7V53h19z"
      ></path>
      {/* PRIVATE ROOMS */}
      <Link to='/explore/private-rooms'>
        <g>
          <path
            id='private-rooms-path'
            fill="#323232"
            d="M32 179l-6-8v-20l6-7h31v-16h-3v13H35v-31h4V81h-4V57h19V46h42v10h15v52h1v3h3v12h-3v4H77v3h17v10H77v3h17v6h3v14h-3v34l-10 13H35v-31h-3zM151 56v70h-3v10h48v13h-21v5h-3v13h3v23h57v-51h-23v10h-3v-13h26V56h-3l-22-21h-26l-21 21h-9zM172 195v10h2v30h24v3h10v-3h24v-42h-57v2h-3z"
            className={`clickable ${currentRoom === 'private-rooms' ? 'current-room' : ''}`}
            onMouseEnter={() => setHoveredRoom('private-rooms')}
            onMouseLeave={() => setHoveredRoom(null)}
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeDasharray="1.0,1.0"
            strokeLinejoin="miter"
            strokeWidth="0.5"
            d="M208 197v-4M208 207v-4M208 218v-4M208 228v-3M198 228v-3M198 218v-4M198 207v-2"
          ></path>
        </g>
      </Link>
      {/* Int. Grey */}
      <g>
        <path
          fill="#adadad"
          d="M19 213v81h38v-41h3v41h43v-33.973L77 260v-4h3v1h23v-16H80v1h-3v-4h26v-27h9v-42h-2v-3h5v45h36v-22h1v-34h-16v39h-5v-39h21v34h2v46h18v-96h-24v-31h-8v-3h8V56h-2v-7h-25v7h-7v49h7v3h-6v37h-3v-15H97v67l-12 16H19zM198 238v2h-21v59h36v-59h-5v-2h-10z"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeDasharray="1.0,1.0"
          strokeLinejoin="miter"
          strokeWidth="0.5"
          d="M75 66l-6-5M75 66l6-5M82 66h14M96 66V56"
        ></path>
      </g>
      {/* Base Outline */}
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="3"
        d="M31 53v91h0l-6 7v20l6 8v30H15v89h92v-83h43v24h27v60h36v-60h23V52h-5l-22-21h-30l-21 21h-8v-7h-33v7h-17V42H50v11H31z"
      ></path>
      {/* Int. Outline */}
      <g
        stroke="#000"
        strokeLinejoin="miter"
        style={{pointerEvents: 'none'}}
      >
        <path
          fill="none"
          strokeLinecap="square"
          d="M35 57v24h4v29h-4v31h25v-13h3v16H32M32 179h3v31h49l10-13v-34h3v34l-12 16H19v26h40v1H19h0v54h38v-41h3v41h43v-83h9v-42h-2v-3h5v45h36v-22h1v-34h-16v39h0-5v-39h5M152 189h2v46h18v-30h2v30h24v3h-20v1h20v1h-20v-1M213 240h-5v-1h5v-1h-5v-3h24V56h-3l-22-21h-26l-21 21h-9M111 56H96V46H54v11H35"
        ></path>
        <path
          fill="none"
          strokeLinecap="square"
          d="M232 190h-57v-23h-3v28h3v-2h57v-3zM172 139v15h3v-5h21v-13h-48v3h24zM111 56v52h1v3h3v-3h6v-3h-7V56h7v-7h25v7h2M148 56v49h-8v3h8v18h3V56M232 136h-26v13h3v-10h23M103 238H77v4h3v-1h23v-3zM103 260H77v-4h3v1h23v3zM32 294v-19M45 294v-19"
        ></path>
        <path
          fill="none"
          d="M57 275l-8 6M45 275l-8 6M32 275l-8 6M59 240l-9 7M78 256l-7-7M97 169l6.768 7.83"
        ></path>
        <path
          fill="none"
          strokeLinecap="square"
          d="M94 130v10H77v3h17v6h3v-19h15v15h3v-22h-3v4H77v3h17zM136 158h16M136 169.333h16M136 173.111h16M136 176.889h16M136 180.667h16M136 184.444h16M115 184.444h16M115 188.222h16M115 192h16M136 188.222h16M136 192h14M136 161.778h16M136 165.556h16"
        ></path>
        <path
          fill="none"
          strokeLinecap="square"
          strokeWidth="3"
          d="M38 226h46"
        ></path>
        <path
          fill="none"
          strokeLinecap="square"
          d="M81.462 213.25v12M85 213.25v12M74.385 213.25v12M77.923 213.25v12M67.308 213.25v12M63.77 213.25v12M60.23 213.25v12M56.692 213.25v12M53.154 213.25v12M49.615 213.25v12M47.615 226v12M46.077 213.25v12M44.077 226v12M39 213.25v12M37 226v12M42.538 213.25v12M40.538 226v12M70.846 213.25v12"
        ></path>
        <path
          fill="#141414"
          strokeLinecap="square"
          d="M196 252v30h0-2v-30h2zM178 254h34M178 257.857h34M178 261.714h34M178 265.571h34M178 269.429h34M178 273.286h34M178 277.143h34M178 281h34"
        ></path>
        <path
          fill="none"
          strokeLinecap="butt"
          d="M65.39 213.134l-4.1 4.01.953 2.647-4.228-2.158.953 2.647h0l-5.458 4.849"
        ></path>
        <path
          fill="none"
          strokeDasharray="1.0,1.0"
          strokeWidth="0.5"
          d="M54 57v9h14M74 197h20M77 163h17"
        ></path>
        <path
          fill="none"
          strokeDasharray="1.0,1.0"
          strokeLinecap="square"
          strokeWidth="0.5"
          d="M232 119h0"
        ></path>
        <path
          fill="none"
          strokeDasharray="1.0,1.0"
          strokeWidth="0.5"
          d="M41 122h-6M47.5 122H53M47.5 122v19M75 66V46M87 86h24M87 74h24M63 74H35M63 86H39M63 99H39M63 110H39M87 99h24M194 56V35M60 122v6M87 110h25M196 167h-21M196 178h-21M208 178h24M208 167h24M208 156h24M198 205h-24M208 203h24M208 214h24M198 214h-24M208 225h24M198 225h-24M57 161H26M57 179H35M57 197H35M87 74l5-6M63 74l-5-6M57 161l-5-6M87 86l5-6M63 86l-5-6M57 179l-5-6M77 180l5-6M87 99l5-6M63 99l-5-6M57 197l-5-6M77 197l5-6M87 110l5-6M63 110l-5-6M57 210l-5-6M63 74v6M87 74v6M63 86v6M87 86v6M63 99v4M87 99v4M77 180h17M57 154v-10M47.46 121.982l-6 5M60 122l-6 5M57 172v-11M57 203v-6M57 190v-11M77 173v-10M77 190v-10M67 197v13M67 197l6 5M194 56l6-5M194 56l-6-5"
        ></path>
        <g fill="none" strokeDasharray="1.0,1.0" strokeWidth="0.5" style={{pointerEvents: 'none'}}>
          <path d="M177 68.643h-26M177 68.643l-5-6M177 73.643v-5"></path>
          <g>
            <path d="M206 68.643h26M206 68.643l5-6M206 73.643v-5"></path>
          </g>
        </g>
        <g fill="none" strokeDasharray="1.0,1.0" strokeWidth="0.5" style={{pointerEvents: 'none'}}>
          <path d="M177 79.714h-26M177 79.714l-5-6M177 84.714v-5"></path>
          <g>
            <path d="M206 79.714h26M206 79.714l5-6M206 84.714v-5"></path>
          </g>
        </g>
        <g fill="none" strokeDasharray="1.0,1.0" strokeWidth="0.5" style={{pointerEvents: 'none'}}>
          <path d="M177 90.786h-26M177 90.786l-5-6M177 95.786v-5"></path>
          <g>
            <path d="M206 90.786h26M206 90.786l5-6M206 95.786v-5"></path>
          </g>
        </g>
        <g fill="none" strokeDasharray="1.0,1.0" strokeWidth="0.5" style={{pointerEvents: 'none'}}>
          <path d="M177 101.857h-26M177 101.857l-5-6M177 106.857v-5"></path>
          <g>
            <path d="M206 101.857h26M206 101.857l5-6M206 106.857v-5"></path>
          </g>
        </g>
        <g fill="none" strokeDasharray="1.0,1.0" strokeWidth="0.5" style={{pointerEvents: 'none'}}>
          <path d="M206 112.929h26M206 112.929l5-6M206 117.929v-5"></path>
          <g>
            <path d="M177 112.929l-5-6M177 112.929h-26M177 112.929v5h0"></path>
          </g>
        </g>
        <g fill="none" strokeDasharray="1.0,1.0" strokeWidth="0.5" style={{pointerEvents: 'none'}}>
          <path d="M206 124h26M206 124l5-6M206 129v-5"></path>
        </g>
        <path
          fill="none"
          strokeDasharray="1.0,1.0"
          strokeWidth="0.5"
          d="M177 124l-5-6M177 124h-26M206 136l5-6"
        ></path>
        <g fill="none" strokeDasharray="1.0,1.0" strokeWidth="0.5" style={{pointerEvents: 'none'}}>
          <path d="M177 61v-5M187 56h-28"></path>
          <g>
            <path d="M206 61v-5M201 56h28"></path>
          </g>
        </g>
        <path
          fill="none"
          strokeDasharray="1.0,1.0"
          strokeWidth="0.5"
          d="M208 156l5-6M208 203l5-6M208 167l5-6M208 214l5-6M208 178l5-6M208 225l5-6M208 190l5-6M208 235l5-6M196 190l-5-6M198 225l-5-6M198 235l-5-6M196 178l-5-6M198 214l-5-6M208 160v-4M208 171v-4M208 183v-5M196 183v-5M196 171v-4"
        ></path>
      </g>
      {/* Icons */}
      <g>
        <path
          fill="#fff"
          stroke="#8f1442"
          strokeWidth="0.5"
          d="M196 241.647h14.216v9.352H196v-9.352z"
        ></path>
        <path fill="#8f1442" d="M202.577 241.61h7.628V251h-7.628v-9.39z"></path>
        <g fill="#8f1442">
          <path d="M199.014 244.644c-.066-.134-.203-.182-.275-.134l-.524.352c-.072.048-.038.241.01.314l1.121 1.794c.049.073.11.097.182.047l.346-.211c.301-.256.245-.48.078-.769l-.938-1.393zm-1.034-1.184a.529.529 0 11-.002 1.058.529.529 0 01.002-1.058z"></path>
          <path d="M198.81 244.482l.951-.207a.278.278 0 01.212.041l.782.605c.129.111.252.25.167.375-.054.081-.24.035-.337-.024l-.821-.436-.837.182a.275.275 0 01-.117-.536zm1.479 2.308l.312.434s.82.057 1.113.074c.224.013.359.097.359.242 0 .146-.114.228-.437.253-.273.022-1.205.079-1.205.079h-.003a.367.367 0 01-.297-.168l-.305-.45c.001 0 .432-.292.463-.464zm-2.049.313l.955-.655a.33.33 0 11.372.543l-.729.5.433 1.069c.163.392.12.56.008.608-.112.047-.262.026-.495-.401l-.659-1.258a.33.33 0 01.115-.406z"></path>
          <path d="M197.102 245.878l.673-.057.385-.872c.061-.138.224-.2.362-.138.138.062.2.224.138.362l-.418.937c-.039.087-.128.172-.223.184 0 0-.667-.014-.85-.024-.191-.011-.405-.047-.41-.178-.007-.187.171-.201.343-.214z"></path>
        </g>
        <path
          fill="#fff"
          d="M208.354 247.154a1.842 1.842 0 01-3.683 0c0-1.381 1.688-2.532 1.688-3.837.383.192.997.87.997 1.765 0 .384-.076.768-.076.768.46-.154.46-.691.46-.691s.614.844.614 1.995z"
        ></path>
        <path
          fill="#8f1442"
          d="M206.499 245.552a.038.038 0 00-.041-.006.037.037 0 00-.022.035c0 .577-.3 1.004-.564 1.381-.223.318-.434.618-.434.959a1.075 1.075 0 002.148 0c0-1.42-1.076-2.36-1.087-2.369z"
        ></path>
        <path
          fill="#fff"
          d="M206.582 246.71a.038.038 0 00-.07.022c0 .348-.184.598-.361.839-.169.23-.329.447-.329.734a.692.692 0 001.381 0c0-.482-.209-1.018-.621-1.595z"
        ></path>
        <path
          fill="#1f212b"
          d="M207.256 246.694a.038.038 0 01-.034-.023l-.037-.075a.039.039 0 01.017-.052.038.038 0 01.051.017l.038.078a.038.038 0 01-.018.051c-.006.002-.011.004-.017.004zm.175.46a.038.038 0 01-.037-.028 3.295 3.295 0 00-.106-.303.038.038 0 01.021-.05.038.038 0 01.05.021c.041.101.078.206.109.311a.038.038 0 01-.026.047c-.004.002-.008.002-.011.002z"
        ></path>
        <path
          fill="#1f212b"
          d="M206.512 248.996a1.076 1.076 0 01-1.074-1.075c0-.341.211-.641.434-.959.264-.377.564-.804.564-1.381 0-.015.008-.029.022-.035a.038.038 0 01.041.006c.015.013.368.319.671.854a.038.038 0 01-.014.052.039.039 0 01-.053-.014 3.563 3.563 0 00-.593-.777c-.027.557-.318.971-.575 1.339-.226.321-.42.598-.42.915a.999.999 0 001.995 0c0-.111-.007-.223-.022-.34a.038.038 0 01.033-.043.039.039 0 01.043.033c.015.121.022.235.022.35 0 .593-.481 1.075-1.074 1.075z"
        ></path>
        <path
          fill="#1f212b"
          d="M207.018 247.614a.038.038 0 01-.036-.024l-.03-.076a.038.038 0 01.02-.05.039.039 0 01.051.021l.031.077a.04.04 0 01-.023.05c-.004.002-.009.002-.013.002zm-.1-.23a.037.037 0 01-.034-.022c-.025-.05-.05-.101-.078-.151a.038.038 0 01.016-.052.037.037 0 01.052.015c.028.052.054.104.079.155a.038.038 0 01-.018.051.035.035 0 01-.017.004z"
        ></path>
        <path
          fill="#1f212b"
          d="M206.512 248.996c-.38 0-.69-.31-.69-.691 0-.287.16-.504.329-.734.177-.241.361-.491.361-.839a.038.038 0 01.07-.022c.049.069.1.145.155.232a.039.039 0 01-.012.053.039.039 0 01-.053-.012c-.031-.049-.06-.095-.089-.137-.034.314-.205.546-.37.77-.162.22-.315.427-.315.689a.615.615 0 001.228 0c0-.084-.007-.172-.021-.263a.04.04 0 01.032-.044.04.04 0 01.044.032c.014.095.022.187.022.275 0 .381-.31.691-.691.691z"
        ></path>
        <g
          fill="none"
          stroke="#8f1442"
          strokeLinejoin="miter"
          strokeWidth="0.75"
        >
          <path d="M203 251v38h-17v-33"></path>
          <path d="M189 259l-3-3-3 3"></path>
        </g>
        <g
          fill="none"
          stroke="#8f1442"
          strokeLinejoin="miter"
          strokeWidth="0.75"
        >
          <path d="M123 186v15h21v-39"></path>
          <path d="M141 165l3-3 3 3"></path>
        </g>
        <g
          fill="none"
          stroke="#8f1442"
          strokeLinejoin="miter"
          strokeWidth="0.75"
        >
          <path d="M49 232H29v-13h27"></path>
          <path d="M53 222l3-3-3-3"></path>
        </g>
        <g>
          <path
            fill="#ebebeb"
            d="M33.893 259.079c.1.099.158.24.248.35.084.102.2.197.271.304-.04.04-.122.057-.169.091-.156.111-.3.274-.384.44-.138.276.122.605.339.767.496.372 1.217.462 1.828.53.939.105 1.922.079 2.854.079.993 0 2.418-.07 3.171-.823.298-.299.093-.715-.203-.937-.562-.421-1.423-.524-2.11-.564-.288-.017-.562-.039-.846-.057-.01 0-.015-.015-.023-.022.05-.049.226-.039.305-.057.198-.044.388-.094.575-.169a2.374 2.374 0 001.366-1.467c.256-.77.27-1.635.169-2.437-.066-.53-.25-1.386-.564-1.805-.126-.168-.21-.371-.339-.542a3.257 3.257 0 00-1.59-1.162c-.297-.099-.695-.102-.994-.102-.228 0-.457.081-.654.147-1.406.469-2.098 1.882-2.37 3.238-.095.476-.079 1.047-.079 1.512 0 .429.086 1.049.316 1.433.226.376.489.792.914 1.005.076.038.147.113.237.135.234.058.44.151.677.203.083.019.259.011.316.068-.044.044-.25.032-.305.034-.135.005-.27 0-.406.011-.262.021-.56.062-.835.102-.279.039-.57.086-.835.191-.072.029-.26.151-.316.113.19-.19.565-.321.598-.609.036-.303-.176-.635-.304-.891-.19-.381-.29-.9-.328-1.321-.08-.926.057-1.848.057-2.775 0-.377-.092-.816-.26-1.151-.103-.208-.316-.317-.462-.463.072-.072.394.018.451.023.445.038 1.03.096 1.467.056.026-.002.038-.037.056-.056.069-.071.137-.142.203-.215.128-.138.277-.274.44-.372.606-.363 1.13-.508 1.885-.508.572 0 1.22.334 1.647.711.135.119.256.274.395.384.07.054.406-.004.53-.012.35-.021.763-.065 1.084-.225.1-.051.132-.167.192-.226-.163-.217-.433-.365-.677-.463-.77-.307-1.588-.46-2.426-.53a17.73 17.73 0 00-1.479-.045c-.538 0-1.095.084-1.624.181-.108.019-.248.022-.35.056-.154.051-.347.123-.508.169-.38.109-.764.257-1.06.553-.546.545-.751 1.672-.813 2.415a11.16 11.16 0 00-.023 1.783c.057.735.164 1.531.44 2.222.074.184.139.356.226.531.022.043.097.133.08.169z"
          ></path>
          <path
            fill="#bdbdbd"
            d="M37.854 252.715c-2.064.232-2.652 3.16-1.862 4.739.092.184.295.385.429.519.46.461 1.309.474 1.895.474.277 0 .603-.093.846-.214 1.028-.514 1.197-1.431 1.197-2.505 0-.954-.359-1.837-1.027-2.505-.095-.095-.29-.259-.429-.294a1.824 1.824 0 01-.327-.135c-.187-.093-.544-.099-.722-.079z"
          ></path>
          <path
            fill="#ebebeb"
            d="M33.927 261.211c-.114.099-.023.301-.023.452 0 .092-.022.179 0 .271.03.121.016.26.057.383.154.463.56.899.97 1.208.345.258 1.045.589 1.095 1.038.053.477-.039.972-.203 1.41-.065.174-.094.4-.147.587-.14.487-.31.939-.395 1.444-.048.292-.132.678.023.937.023.038.067.191.124.191.127 0 .232.046.35.079.259.074.565.123.823.17.48.087 1.02.109 1.5.045.115-.015.408-.04.497-.124.607-.573 1.071-1.367 1.117-2.201.016-.28.009-.688-.169-.925-.575-.767-1.492-1.249-2.347-1.591-.147-.059-.279-.145-.417-.214-.602-.301-1.192-.578-1.76-1.004-.446-.334-.88-.822-1.016-1.366-.062-.246-.043-.518-.056-.767 0-.011-.015-.03-.023-.023z"
          ></path>
          <path
            fill="#a7a7a7"
            d="M33.96 261.099c-.097.098.076.303.091.406.058.406.611.607.925.733.694.278 1.53.317 2.268.44.35.059.795.114 1.095.294.358.214.895.364 1.015.846.063.249.208.529.26.79.193.965.55 1.931.35 2.933-.121.605-.382 1.345-1.027 1.603-.253.101-.532.209-.824.248-.687.092-1.376.013-2.042-.135-.096-.022-.614-.176-.654-.136.743.744 2.128.726 3.091.688.034-.001.123-.076.158-.09.063-.025.178-.02.248-.034.127-.025.245-.079.361-.113.392-.111.959-.341 1.129-.767.152-.382.169-.742.169-1.173 0-.065.092-.051.068-.124-.09-.267-.172-.572-.26-.835a12.35 12.35 0 01-.248-.892c-.024-.093-.026-.296-.09-.361-.109.109-.151-.266-.17-.35-.076-.343-.2-.831.012-1.128.203-.285.509-.445.8-.621.434-.259.88-.571 1.107-1.026.062-.124.264-.65.146-.768a4.913 4.913 0 01-1.094.384c-.075.017-.16.003-.237.023-.61.152-1.273.189-1.907.214-.706.028-1.398.02-2.099-.068a6.873 6.873 0 01-1.354-.282c-.105-.035-.355-.073-.395-.192-.296 0-.658-.333-.891-.507z"
          ></path>
          <path
            fill="#bdbdbd"
            d="M33.95 261.211c-.102.102-.03.286-.023.429.006.112.035.273.079.384.057.143.103.308.17.44.23.461.684.836 1.105 1.117.124.083.268.204.406.26.284.113.555.299.813.428.681.341 1.381.631 2.042 1.027.372.223.757.505.982.88.114.19.156.437.169.666.054.94-.434 1.716-1.05 2.392.084.084.417-.149.508-.214.412-.294.627-.675.756-1.129.398-1.39-.164-2.791-.53-4.073-.078-.274-.417-.607-.677-.711-.103-.041-.266-.095-.361-.158-.24-.16-.784-.232-1.083-.282-.634-.106-1.28-.196-1.896-.35-.122-.03-.251-.042-.372-.09-.299-.119-.603-.24-.813-.519-.105-.141-.13-.402-.225-.497zM40.381 252.591c.603.904 1.112 1.809 1.185 2.934.026.398.014.801-.011 1.184-.044.649-.23 1.321-.407 1.941-.041.145-.21.523-.101.632 1.154-.577 1.59-2.257 1.602-3.43.003-.274.024-.795 0-1.106-.025-.322-.122-.682-.147-1.004-.028-.371-.18-.783-.282-1.14-.004-.016-.031-.056-.045-.056-.387-.011-.775-.003-1.162 0-.2.001-.4-.003-.598.011-.016.001-.023.023-.034.034z"
          ></path>
          <path
            fill="#8a8a8a"
            d="M42.108 252.049c-.055.055 0 .251.033.316-.083.084-.368.047-.485.057-.425.037-.86.004-1.286.056-.087.011-.01.102.045.102h.587c.387-.003.775-.019 1.162-.012.023.001.073.162.079.181.12.359.153.743.237 1.106.148.64.158 1.324.158 1.986a5.17 5.17 0 01-.52 2.234c-.17.34-.4.689-.71.947-.081.068-.274.252-.384.215 0-.192.084-.393.136-.576.079-.275.15-.549.214-.835.212-.952.331-1.931.136-2.911a3.419 3.419 0 00-.271-.835c-.045-.089-.059-.205-.136-.282-.006.004-.049.025-.045.045.053.263.188.53.248.802.123.553.158 1.127.158 1.692 0 .905-.235 1.893-.936 2.516-.135.12-.29.224-.451.305-.106.053-.222.075-.305.158.05.051.666.088.801.113.258.047.564.095.801.214.029.014.192.113.226.09.399-.266.647-.873.812-1.286.511-1.278.629-3.079.44-4.4-.094-.661-.254-1.507-.744-1.998zM37.617 260.027c-.317.002-.633.025-.948.056-.188.019-.378.034-.564.068-.105.019-.794.124-.756.316.028.14.296.211.406.248.506.169 1.026.243 1.557.293.187.018.376.017.564.023.222.007.444.009.666 0 .545-.021 1.178-.088 1.692-.293.1-.04.471-.153.44-.305-.032-.162-.428-.214-.552-.237a10.3 10.3 0 00-.43-.068 10.577 10.577 0 00-.733-.067 18.795 18.795 0 00-1.342-.034z"
          ></path>
          <path
            fill="#a7a7a7"
            d="M34.943 252.557c.109.109.541-.022.643.079a6.806 6.806 0 00-.62 1.14c-.036.083-.135.227-.148.316-.038.273-.132.559-.18.846-.081.485-.102.986-.102 1.478 0 .441.101 1.236.328 1.614.356.594.737 1.026 1.387 1.286.055.022.154-.009.192-.011.132-.008.264.002.395 0 .192-.004.384-.008.576-.023.01-.001.015-.015.022-.023-.08-.08-.69-.098-.88-.169-.778-.292-1.284-.682-1.602-1.478-.246-.615-.237-1.34-.237-1.986 0-.26.057-.524.101-.767.26-1.423.965-2.755 2.415-3.238.297-.099.694-.102.993-.102.359 0 .705.138 1.016.293 1.223.612 1.814 1.936 1.997 3.216.103.72.132 1.492-.045 2.2-.168.67-.527 1.302-1.174 1.625-.05.026-.1.076-.158.091-.327.081-.626.202-.97.248-.114.015-.28-.048-.339.067.008.008.012.023.023.023.218.007.436-.007.654 0 .005 0 .515.069.542.056a3.113 3.113 0 001.038-.744c.741-.848.762-2.492.61-3.487a6.144 6.144 0 00-.238-1.015c-.024-.074-.046-.182-.101-.237.056-.113-.052-.141-.08-.249-.056-.228-.248-.517-.394-.722-.042-.058-.224-.241-.192-.304-.043-.043-.049-.046-.068-.102-.143 0-.321-.289-.428-.384-.241-.212-.533-.362-.802-.496-.877-.438-2.007-.225-2.764.316a4.128 4.128 0 00-.643.575c-.013.014-.015.044-.034.046-.142.013-.286.002-.429 0-.08-.002-.237-.045-.304.022z"
          ></path>
          <path
            fill="#bdbdbd"
            d="M33.667 252.444c.046.069.147.085.215.136.146.109.26.25.338.406.148.294.187.671.215.993.089 1.022-.159 2.04-.023 3.058.047.354.128.837.316 1.151.141.235.32.606.305.891-.015.271-.415.466-.62.62.024.038.02.051.078.034.05-.014.112-.071.158-.09.188-.075.412-.107.598-.169.232-.077.534-.09.779-.113.082-.008.258.013.316-.045-.098-.097-.312-.084-.44-.181-.28-.209-.557-.382-.768-.677-.378-.53-.505-1.214-.553-1.884a6.898 6.898 0 01.068-1.625c.032-.193.077-.385.124-.575.011-.044.063-.111.068-.147.029-.2.098-.432.192-.621.172-.344.378-.662.598-.992-.107-.108-.496.068-.553-.102-.376 0-.742-.039-1.106-.056-.08-.004-.244-.073-.305-.012z"
          ></path>
          <path
            fill="#8a8a8a"
            d="M42.074 261.065c-.113.056-.167.205-.282.271-.176.1-.367.201-.542.259-.673.224-1.52.308-2.234.316-.67.007-1.34.007-2.009 0-.23-.003-.544-.068-.79-.068-.272 0-.602-.021-.868-.101-.1-.03-.445-.164-.53-.079.05.05.165.048.236.079.238.102.529.164.779.214 1.47.294 3.022.316 4.513.068.283-.047.546-.101.824-.181.126-.036.263-.107.384-.124.117-.016.275-.186.395-.146 0 .751-.527 1.288-1.163 1.669-.32.192-.704.38-.925.689-.222.311-.089.862 0 1.218.027.108.033.259.113.339.023-.023.056-.034.079-.057.025-.025-.043-.265-.045-.293-.024-.241-.076-.549.034-.767.176-.352.622-.54.925-.767.593-.445 1.06-.911 1.15-1.637.003-.022.072-.786-.044-.902z"
          ></path>
          <path
            fill="#bdbdbd"
            d="M33.825 260.489c-.127.128.037.411.102.542.222.443.877.612 1.32.711.557.124 1.167.142 1.738.169 1.074.051 2.108.056 3.16-.068.652-.076 1.374-.19 1.861-.677.101-.101.307-.55.192-.665-.06.06-.05.144-.102.214-.097.13-.211.286-.36.361-1.362.681-3.14.542-4.604.542-.908 0-2.053-.068-2.844-.542a1.143 1.143 0 01-.372-.384c-.04-.066-.034-.146-.09-.203z"
          ></path>
          <path
            fill="#8a8a8a"
            d="M40.618 267.553c-.024.024-.07.034-.079.067-.02.084.031.17.034.249.003.09.003.18 0 .27-.013.393-.192.722-.463.993-.28.281-.718.406-1.083.497-.128.032-.465.059-.541.135.09.091.641-.002.8-.034.854-.17 1.644-.447 1.49-1.523-.017-.12-.062-.59-.158-.654z"
          ></path>
          <path
            fill="#a7a7a7"
            d="M42.085 252.038c-.07.071-.09.176-.214.226-.147.058-.361.125-.508.146-.057.009-.129-.006-.17.034.067.066.352.02.452.012.305-.027.563.091.485-.26-.013-.057-.012-.109-.045-.158z"
          ></path>
          <path d="M34.423 259.699c-.01.012-.01.012-.022.023l.022.023.023-.023-.023-.023z"></path>
          <path
            fill="none"
            stroke="#000"
            strokeWidth="0.15"
            d="M36.781 251.065c-.418.043-.794.101-1.125.173a5.515 5.515 0 00-.899.271 2.52 2.52 0 00-.617.335 1.75 1.75 0 00-.39.455 3.462 3.462 0 00-.324.769 6.371 6.371 0 00-.228 1.06c-.05.383-.075.794-.075 1.234 0 .441.028.892.086 1.353.058.462.14.888.25 1.278.107.389.22.703.335.941.115.239.213.412.292.52.08.108.159.195.238.26l.12.097a8.747 8.747 0 01-.13.076c-.087.051-.17.116-.25.195a.846.846 0 00-.184.271.87.87 0 00-.065.346c0 .13.022.238.065.325.043.086.054.263.033.53a2.44 2.44 0 00.032.704c.044.202.09.353.14.454.051.101.124.213.217.336.094.123.224.256.39.4.166.145.383.307.65.487.267.181.436.311.508.39.072.08.127.159.163.238.036.08.054.213.054.401 0 .187-.015.364-.044.53-.028.166-.158.657-.39 1.472-.23.816-.353 1.335-.367 1.559-.015.224-.011.383.01.476a.845.845 0 00.185.325c.1.123.198.213.292.271a1.9 1.9 0 00.346.162c.137.051.35.101.639.152.289.05.685.079 1.19.086.506.008.867 0 1.083-.021.217-.022.455-.069.714-.141.26-.072.459-.148.596-.227.137-.08.234-.148.292-.206a.794.794 0 00.152-.227c.043-.094.068-.249.075-.466a2.663 2.663 0 00-.01-.454c-.015-.087-.134-.524-.358-1.31-.223-.787-.35-1.26-.378-1.418a3.261 3.261 0 01-.044-.574c0-.224.047-.401.141-.53.094-.13.303-.307.628-.531.325-.224.563-.408.714-.552.152-.144.27-.281.358-.411.086-.13.147-.238.184-.325.036-.087.072-.234.108-.444.036-.209.043-.433.021-.671-.021-.238-.01-.404.033-.498a.69.69 0 00.065-.292.865.865 0 00-.087-.346.957.957 0 00-.173-.282 1.241 1.241 0 00-.227-.173l-.141-.087.13-.119c.087-.079.188-.209.303-.389.115-.181.217-.372.303-.574.087-.202.162-.412.227-.628.065-.217.138-.552.217-1.007.08-.454.126-.956.14-1.504.015-.549 0-1.003-.043-1.364a6.806 6.806 0 00-.162-.91 4.124 4.124 0 00-.249-.692 3.808 3.808 0 00-.216-.422 1.668 1.668 0 00-.239-.26 2.088 2.088 0 00-.498-.325 4.614 4.614 0 00-.855-.303 9.049 9.049 0 00-1.277-.227 12.11 12.11 0 00-1.396-.087c-.433 0-.86.022-1.278.065z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Floor3;