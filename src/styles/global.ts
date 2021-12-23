import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
:root {
  /* text color */
  --color__txColor: ${(props: any) => props.theme.themeColors.txColor};
  /* background-color */
  --color__bgColor: ${(props: any) => props.theme.themeColors.bgColor}; 
  /* border-color */
  --color__bdColor: ${(props: any) => props.theme.themeColors.bdColor}; 
  /* border-radius */
  --color__bdRadius: 4px;
}

  * { box-sizing: border-box; }
  html,
  body { padding: 0; margin: 0; }
  a { color: inherit; text-decoration: none; }
  li { list-style: none; }


  body {
    width: 100vw;
    height: 100vh;
  }
`;
