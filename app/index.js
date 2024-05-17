import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import OwnedCourtCard from "../src/components/Molecules/OwnedCourtCard";
import FontLoader from "../src/components/FontLoader";
import Carousel from "../src/components/Organisms/Carousel";
import InputComponent from "../src/components/Atoms/SearchInput";
import { METRICS } from "../src/theme/metrics";
import Chip from "../src/components/Atoms/Chip";
import ChipList from "../src/components/Molecules/ChipList";
import CourtItem from "../src/components/Organisms/CourtItem";

export default function App() {
  return (
    <FontLoader>
      <View style={[styles.container, { width: METRICS.screenWidth }]}>
        <StatusBar style="auto" />
        <Text>hsifhd</Text>
        <View style={{ padding: 20 }}>
          <CourtItem />
        </View>
      </View>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // paddingHorizontal: 12,
  },
});
