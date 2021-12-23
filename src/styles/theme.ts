import baseStyled, { ThemedStyledInterface } from "styled-components";

const colors = {
  blue: "#2054ae",
  pink: "#c43683",
  black: "#24272a",
};

export const dark = {
  themeColors: {
    txColor: "#ffffff",
    bgColor: "#232323",
  },
  colors,
};

export const light = {
  themeColors: {
    txColor: "#232323",
    bgColor: "#ffffff",
  },
  colors,
};

export const themes = {
  light,
  dark,
};

export type Theme = typeof dark;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
