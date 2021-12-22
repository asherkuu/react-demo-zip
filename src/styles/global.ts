import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
:root {
  --color__titleColor: ${(props: any) => props.theme.themeColors.titleColor};
  --color__bgColor: ${(props: any) => props.theme.themeColors.bgColor};
}

  * { box-sizing: border-box; }
  html,
  body { padding: 0; margin: 0; }
  a { color: inherit; text-decoration: none; }
  li { list-style: none; }


  body {
    width: 100%;
    height: 100%;
  }
`;
