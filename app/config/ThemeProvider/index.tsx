import { APP_THEME } from "./theme";
import { PropsWithChildren } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components/native";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProviderSC theme={APP_THEME}>{children}</ThemeProviderSC>;
};
