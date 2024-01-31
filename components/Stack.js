import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import AdoptChildScreen from "./AdoptChildScreen";
import HelpChildScreen from "./HelpChildScreen";

const Stack = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdoptChild"
          component={AdoptChildScreen}
          options={{ title: "Adopt Child" }}
        />
        <Stack.Screen
          name="HelpChild"
          component={HelpChildScreen}
          options={{ title: "Help Child" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
