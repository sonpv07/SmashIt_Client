import React, { createContext, useContext } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const FontContext = createContext();

const FontLoader = ({ children }) => {
  const [fontsLoaded, error] = useFonts({
    "quicksand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "quicksand-semibold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontContext = () => useContext(FontContext);

export default FontLoader;
