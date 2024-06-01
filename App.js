import { StatusBar, StyleSheet, Text, View } from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";

import { COLORS } from "./src/theme/colors";

import TopContent from "./src/components/Atoms/TopContent";

import { NativeBaseProvider } from "native-base";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import NotificationDetail from "./src/screens/Notification/notification-detail/NotificationDetail";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <FontLoader>
          <View style={styles.safeContainer}>
            <ExpoStatusBar style="dark" />
            <TopContent />
            {/* <CourtCodeManagement /> */}
            <Navigation />
            {/* <NotificationDetail /> */}
          </View>
        </FontLoader>
      </NativeBaseProvider>
    </AuthProvider>
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
