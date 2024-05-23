import { StatusBar, StyleSheet, Text, View } from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";

import { COLORS } from "./src/theme/colors";

import TopContent from "./src/components/Atoms/TopContent";

import { NativeBaseProvider } from "native-base";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import NotificationDetail from "./src/screens/Notification/notification-detail/NotificationDetail";

export default function App() {
  return (
    <NativeBaseProvider>
      <FontLoader>
        <View style={styles.safeContainer}>
          {/* <TopContent /> */}
          {/* <CourtCodeManagement /> */}
          <Navigation />
          {/* <NotificationDetail /> */}
          <ExpoStatusBar style="dark" />
        </View>
      </FontLoader>
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
