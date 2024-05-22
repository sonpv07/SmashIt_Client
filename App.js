import { StatusBar, StyleSheet, Text, View } from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./src/theme/colors";

export default function App() {
  return (
    <FontLoader>
      <View style={styles.safeContainer}>
        <Navigation />
        {/* <RegisterCourt /> */}
        <StatusBar hidden />
      </View>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    // marginTop: 50,
    // paddingHorizontal: 10
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
