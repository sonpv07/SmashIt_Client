import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
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

import RolePick from "../screens/SplashScreen/RolePick";
import { AuthContext } from "../context/AuthContext";
import RegisterCourt from "../screens/CourtOwner/RegisterCourt/RegisterCourt";
import FinancialBook from "../screens/CourtOwner/RevenueExpenditure/FinancialBook";
import BlogNoti from "../screens/Notification/notification-detail/BlogNoti";
import BookingNoti from "../screens/Notification/notification-detail/BookingNoti";
import OfferNoti from "../screens/Notification/notification-detail/OfferNoti";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import RatingNoti from "../screens/Notification/notification-detail/RatingNoti";
import CreatePost from "../screens/Notification/news-feed/CreatePost";
import CourtOwner from "../screens/SplashScreen/CourtOwner";
import Rewards from "../screens/User/Settings/Rewards";
import MyProfile from "../screens/User/Settings/MyProfile";

import RewardDetail from "../screens/User/Settings/RewardDetail";
import RewardHistory from "../screens/User/Settings/RewardHistory";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  // const isLogin = false;

  const { isLogin, firstRegister, chosenRole } = useContext(AuthContext);

  console.log(chosenRole);

  return (
    // NOT LOGIN SCREEN

    <NavigationContainer>
      {!isLogin && !firstRegister && (
        <Stack.Navigator
          initialRouteName="RolePick"
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

          <Stack.Screen
            name="RolePick"
            component={RolePick}
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
          initialRouteName="CourtOwner"
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
            name="BlogNoti"
            component={BlogNoti}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BookingNoti"
            component={BookingNoti}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OfferNoti"
            component={OfferNoti}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RatingNoti"
            component={RatingNoti}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreatePost"
            component={CreatePost}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CourtOwner"
            component={CourtOwner}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FavoriteCourt"
            component={BookedHistory}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="FinancialBook"
            component={FinancialBook}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MyProfile"
            component={MyProfile}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rewards"
            component={Rewards}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RewardHistory"
            component={RewardHistory}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RewardDetail"
            component={RewardDetail}
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
          initialRouteName={
            chosenRole === "player"
              ? "SplashScreen_User"
              : "SplashScreen_CourtOwner"
          }
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
          {/* <Stack.Screen
            name="SplashScreen_CourtOwner"
            component={SplashScreen_CourtOwner}
            options={{
              title: "",
              animation: "slide_from_right",
              headerShown: false,
            }}
          /> */}

          <Stack.Screen
            name="RegisterCourt"
            component={RegisterCourt}
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
