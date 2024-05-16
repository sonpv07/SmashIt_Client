import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import OwnedCourtCard from "../src/components/Molecules/OwnedCourtCard";
import Comment from "../src/components/Molecules/Comment";
import FontLoader from "../src/components/FontLoader";
import FinancialActivities from "../src/components/Molecules/FinancialActivities";
import PackageItem from "../src/components/Molecules/PackageItem";
import PackageDescription from "../src/components/Molecules/PackageDescription";

export default function App() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <FinancialActivities /> */}
        {/* <OwnedCourtCard /> */}
        {/* <Comment /> */}
        {/* <PackageItem /> */}
        <PackageDescription />
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
