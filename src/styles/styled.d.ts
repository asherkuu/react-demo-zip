import "styled-components";
import { StringMappingType } from "typescript";

declare module "styled-components" {
  export interface DefaultTheme {
    themeColors: {
      titleColor: string;
      bgColor: string;
    };
    colors: {
      blue: string;
      pink: string;
      black: string;
    };
  }
}
