import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme/index.js";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [isOswaldLoaded] = useOswald({ Oswald_400Regular });
  const [isLatoLoaded] = useLato({ Lato_400Regular });

  return (
    isOswaldLoaded &&
    isLatoLoaded && (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantScreen />
          <ExpoStatusBar style="light" />
        </ThemeProvider>
      </>
    )
  );
}
