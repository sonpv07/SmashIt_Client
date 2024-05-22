import { View, Text } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import Home from "../screens/Home";
import BottomTabs from "./BottomTabs";
import SplashScreen_User from "../screens/SplashScreen/SplashScreen_User";
import SearchCourt from "../screens/User/Court/SearchCourt";
import BookedHistory from "../screens/User/Booking/BookedHistory";
import CourtDetail from "../screens/User/Court/CourtDetail";
import PackageDetail from "../screens/CourtOwner/Packages/PackageDetail";
import Pakage from "../screens/CourtOwner/Packages/Pakage";
import CourtCodeManagement from "../screens/CourtOwner/MyCourt/CourtCodeManagement";
import CreateBooking from "../screens/CourtOwner/MyCourt/CreateBooking";
import NotificationLayout from "../screens/Notification/NotificationLayout";
import NotificationDetail from "../screens/Notification/notification-detail/NotificationDetail";
import Notification from "../screens/Notification/Notification";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  const isLogin = true;

  const firstRegister = false;

  const role = "user";

  return (
    // NOT LOGIN SCREEN

    <NavigationContainer>
      {!isLogin && !firstRegister && (
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

      {isLogin && !firstRegister && (
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

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Pakage"
            component={Pakage}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="PackageDetail"
            component={PackageDetail}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CourtCodeManagement"
            component={CourtCodeManagement}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CreateBooking"
            component={CreateBooking}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchCourt}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BookedHistory"
            component={BookedHistory}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CourtDetail"
            component={CourtDetail}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NotificationDetail"
            component={NotificationDetail}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}

      {firstRegister && (
        <Stack.Navigator
          initialRouteName="SplashScreen_User"
          screenOptions={{
            animation: "default",
          }}
        >
          <Stack.Screen
            name="SplashScreen_User"
            component={SplashScreen_User}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
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
