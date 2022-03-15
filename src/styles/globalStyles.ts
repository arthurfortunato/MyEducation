import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #37373c;
  }

  html,
  body {
    overflow-x: hidden;
  }
  
  /* Scrollbar ============================================================== */

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: rgb(64, 64, 68);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(38, 38, 42);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

 
`;
