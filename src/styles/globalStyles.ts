import { createGlobalStyle } from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: any;
  }

  export interface IntrinsicElements {
    [key: string]: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    width: 100%;
    height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({theme}) => theme.colors.backgroundHeaderContentCards};
  }

  strong {
    color: ${({theme}) => theme.colors.strongText};
  }

  html,
  body {
    overflow-x: hidden;
  }
  
  /* Scrollbar ============================================================== */

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: rgb(64, 64, 68);
    border-radius: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(38, 38, 42);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  } 
`;
