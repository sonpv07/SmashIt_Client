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
import TopContent from "./src/components/Atoms/TopContent";
import RegisterCourt from "./src/screens/CourtOwner/RegisterCourt/RegisterCourt";
import Login from "./src/screens/Auth/Login";
import { NativeBaseProvider } from "native-base";
import Signup from "./src/screens/Auth/Signup";
import PackageList from "./src/screens/CourtOwner/Packages/PackageList";
import Pakage from "./src/screens/CourtOwner/Packages/Pakage";
import PackageDetail from "./src/screens/CourtOwner/Packages/PackageDetail";
import CourtCodeManagement from "./src/screens/CourtOwner/MyCourt/CourtCodeManagement";

export default function App() {
  return (
    <NativeBaseProvider>
      <FontLoader>
        <View style={styles.safeContainer}>
          <TopContent />
          {/* <CourtCodeManagement /> */}
          <Navigation />
          <StatusBar hidden />
        </View>
      </FontLoader>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
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
