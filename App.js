import { StatusBar, StyleSheet, Text, View } from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./src/theme/colors";
import SlotChip from "./src/components/Organisms/SlotChip";
import PaymentMethod from "./src/components/Organisms/PaymentMethod";
import CategoryList from "./src/components/Organisms/CategoryList";
import MyVoucherCard from "./src/components/Organisms/MyVoucherCard";
import NotificationInfo from "./src/components/Organisms/NotificationInfo";
import BlogPost from "./src/components/Organisms/BlogPost";
import Login from "./src/screens/Auth/Login";
import { NativeBaseProvider } from "native-base";
import Signup from "./src/screens/Auth/Signup";
import Welcome from "./src/screens/SplashScreen/Welcome";
import RolePick from "./src/screens/SplashScreen/RolePick";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

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
