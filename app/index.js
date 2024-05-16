import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import FontLoader from "../src/components/FontLoader";
import CourtBackground from "../src/components/Organisms/CourtBackground";

export default function App() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <FinancialActivities /> */}
        {/* <OwnedCourtCard /> */}
        {/* <Comment /> */}
        {/* <PackageItem /> */}
        {/* <PackageDescription /> */}
        {/* <CourtInfo /> */}
        <CourtBackground />
      </View>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
