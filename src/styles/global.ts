import { createGlobalStyle } from "styled-components";
import bkgCircle1 from '../assets/Ellipse-1.png';
import bkgCircle2 from '../assets/Ellipse-2.png';

const GlobalStyle = createGlobalStyle`
  
  /*==reset==*/
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: url(${bkgCircle2}) no-repeat 1010px, url(${bkgCircle1}) no-repeat 930px;
    background-size: inherit;
    background-color: #F8FDFF;
  }

  button {
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
  }
`

export default GlobalStyle