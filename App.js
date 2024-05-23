import { StatusBar, StyleSheet, Text, View } from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";

import { COLORS } from "./src/theme/colors";

import { NativeBaseProvider } from "native-base";
import TopContent from "./src/components/Atoms/TopContent";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <FontLoader>
          <View style={styles.safeContainer}>
            <TopContent />
            {/* <CourtCodeManagement /> */}
            <Navigation />
            {/* <Package /> */}
            {/* <PackageDetail /> */}
            <StatusBar hidden />
          </View>
        </FontLoader>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    // marginTop: 50,
    // paddingHorizontal: 10
    // marginTop: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
