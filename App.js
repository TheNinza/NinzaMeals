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

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, Text } from "react-native";
import { SafeArea } from "./src/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Setting = () => (
  <SafeArea>
    <Text>Setting</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: {
    true: "md-restaurant",
    false: "md-restaurant-outline",
  },
  Settings: {
    true: "md-settings",
    false: "md-settings-outline",
  },
  Map: {
    true: "md-map",
    false: "md-map-outline",
  },
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    return (
      <Ionicons
        name={TAB_ICON[route.name][focused]}
        size={size}
        color={color}
      />
    );
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
  tabBarStyle:
    Platform.OS === "ios"
      ? {}
      : { paddingBottom: 8, paddingTop: 8, height: 55 },
});

export default function App() {
  const [isOswaldLoaded] = useOswald({ Oswald_400Regular });
  const [isLatoLoaded] = useLato({ Lato_400Regular });

  return (
    isOswaldLoaded &&
    isLatoLoaded && (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Setting} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="light" />
      </>
    )
  );
}
