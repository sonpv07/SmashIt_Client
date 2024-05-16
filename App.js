import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./src/theme/colors";

export default function App() {
  return (
    <FontLoader>
      <SafeAreaView style={styles.safeContainer}>
        <Navigation />
      </SafeAreaView>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
