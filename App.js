import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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

export default function App() {
  return (
    <NativeBaseProvider>
      <FontLoader>
        <Signup />
        <StatusBar style="light" />
      </FontLoader>
    </NativeBaseProvider>
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
