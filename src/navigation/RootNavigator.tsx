import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator() {
  // Temporariamente vamos sempre mostrar AppNavigator
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
