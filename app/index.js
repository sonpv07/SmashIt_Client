import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import Input from "../src/components/Atoms/Input";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "quicksand-regular": require("../src/assets/fonts/Quicksand-Medium.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <Text>ASBDJSAKBDJKH</Text>
      <Text
        style={{
          fontFamily: "quicksand-regular",
          fontWeight: 700,
        }}
      ></Text>
      <Input placeholder={"Text here"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
