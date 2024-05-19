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
import DatePickerSlider from "./src/components/Organisms/DatePicker";
import BookingNumber from "./src/components/Organisms/CourtNumber";
import courtImage from "./src/assets/images/Court.png";
import FavoriteCourt from "./src/components/Organisms/FavoriteCourt";
import BookingCourt from "./src/components/Organisms/BookingCourt";
import HistoryCourt from "./src/components/Organisms/HistoryCourt";
import Title_MoreInfo from "./src/components/Atoms/Title_MoreInfo";
import SplashScreen_User from "./src/screens/SplashScreen/SplashScreen_User";

export default function App() {
  const courtName = "Sân cầu lông Nhật Thiện";
  const slot = 2;
  const numCourt = 1;
  const stars = "5.0";
  const book = "100";
  const courtAddress =
    "606/16 Nguyễn Xiển, Long Th ạnh Mỹ, Thủ Đức, Thành phố Hồ Chí Minh";
  const courtDistance = "1.1km";
  const courtNo = "San 1";
  const timeSlot = 0;
  const courtprice = "100.000";
  const isTrue = true;
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
    marginTop: 50,
    // paddingHorizontal: 10
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
