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
import HeaderBar from "./src/components/Atoms/HeaderBar";
import RegisterCourt from "./src/screens/CourtOwner/RegisterCourt/RegisterCourt";

export default function App() {
  return (
    <FontLoader>
      <SafeAreaView style={styles.safeContainer}>
        <BlogPost />
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
