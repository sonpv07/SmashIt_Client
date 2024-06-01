import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE } from "../../../theme/fonts";
import icons from "../../../constants/icons";
import NotificationInfo from "../../../components/Organisms/NotificationInfo";

const offers = [
  {
    title: "Cơ hội nhận 50% giảm giá đặt sân",
    desc: "Do Dang ơi! Nhớ điền đầy đủ thông tin để nhận ưu đãi về phiếu giảm giá đặt sân 50% nhé ",
    timeStamp: "02 Th4, 16:10",
    id: 1,
  },
  {
    title: "Cơ hội nhận 50% giảm giá đặt sân",
    desc: "Do Dang ơi! Nhớ điền đầy đủ thông tin để nhận ưu đãi về phiếu giảm giá đặt sân 50% nhé ",
    timeStamp: "02 Th4, 16:10",
    id: 2,
  },
];

const OfferNoti = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Image source={icons.goback} style={styles.goback} />
        </TouchableOpacity>
        <Text style={styles.title}>Khuyến mãi</Text>
      </View>
      <NotificationInfo list={offers} icon={icons.voucher} />
    </SafeAreaView>
  );
};

export default OfferNoti;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: SIZE.size_20,
    fontFamily: "quicksand-bold",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    gap: 10,
  },
  goback: {
    width: 28,
    height: 28,
  },
});
