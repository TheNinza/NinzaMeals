import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform, Text } from "react-native";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../utility/safe-area.component";

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

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
