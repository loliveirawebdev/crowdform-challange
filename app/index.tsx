import { registerRootComponent } from "expo";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "./config/ThemeProvider";
import { AppNavigation } from "./features/AppNavigation";

function App() {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
}

export default registerRootComponent(App);
