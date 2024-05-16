import { View, Text } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import Home from "../screens/Home";
import BottomTabs from "./BottomTabs";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  const isLogin = true;
  const role = "user";

  return (
    // NOT LOGIN SCREEN

    <NavigationContainer>
      {!isLogin && (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            animation: "default",
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            headerBackTitleVisible={true}
            options={{
              headerShown: false,
              title: "",
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}

      {/* ALREADY LOGIN SCREEN */}

      {isLogin && (
        <Stack.Navigator
          initialRouteName="BottomTab"
          screenOptions={{
            animation: "default",
          }}
        >
          <Stack.Screen
            name="BottomTab"
            component={BottomTabs}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
