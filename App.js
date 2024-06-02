import { StatusBar, StyleSheet, Text, View } from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";

import { COLORS } from "./src/theme/colors";

import { NativeBaseProvider } from "native-base";
import TopContent from "./src/components/Atoms/TopContent";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import Login from "./src/screens/Auth/Login";
import Signup from "./src/screens/Auth/Signup";
import CourtOwner from "./src/screens/SplashScreen/CourtOwner";
import { AuthProvider } from "./src/context/AuthContext";
import MyProfile from "./src/screens/User/Settings/MyProfile";
import Rewards from "./src/screens/User/Settings/Rewards";
import RewardDetail from "./src/screens/User/Settings/RewardDetail";
import RewardHistory from "./src/screens/User/Settings/RewardHistory";
import Languages from "./src/screens/User/Settings/Languages";
import CourtRating from "./src/screens/Notification/notification-detail/CourtRating";

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
