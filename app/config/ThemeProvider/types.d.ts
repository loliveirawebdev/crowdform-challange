import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
      black: string;
      gray: string;
      darkGray: string;
      lightGray: string;
      red: string;
      blue: string;
      yellow: string;
    };
  }
}
