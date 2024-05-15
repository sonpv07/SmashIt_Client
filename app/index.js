import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import OwnedCourt from "../src/components/Molecules/OwnedCourtCard";
import OwnedCourtCard from "../src/components/Molecules/OwnedCourtCard";

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
      <StatusBar style="auto" />
      <OwnedCourtCard />
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
