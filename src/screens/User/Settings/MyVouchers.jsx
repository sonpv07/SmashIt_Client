// import { TouchableOpacity } from "react-native";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import images from "../../../constants/images";
import { SIZE } from "../../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

const myVouchers = [
  {
    id: 1,
    title:
      "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu qua ứng dụng SmashIt",
    expiryDate: "11/04/2024",
    image: images.voucher,
  },
  {
    id: 2,
    title:
      "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu qua ứng dụng SmashIt",
    expiryDate: "11/04/2024",
    image: images.voucher,
  },
  {
    id: 3,
    title:
      "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu qua ứng dụng SmashIt",
    expiryDate: "11/04/2024",
    image: images.voucher,
  },
  {
    id: 4,
    title:
      "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu qua ứng dụng SmashIt",
    expiryDate: "11/04/2024",
    image: images.voucher,
  },
];

const MyVouchers = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        text={"Khuyến mãi của tôi"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
          marginTop: 20,
          paddingHorizontal: 15,
          gap: 30,
        }}
      >
        {myVouchers.map((item) => (
          <TouchableOpacity
            style={styles.vchCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("MyVoucherDetail")}
          >
            <Image
              source={item.image}
              style={[styles.vchImg, { width: width - 30 }]}
            />
            <View style={styles.vchTitle}>
              <Text style={styles.vt}>{item.title}</Text>
              <View style={styles.expiryContainer}>
                <Text style={styles.eText}>Sẽ hết hạn vào:</Text>
                <Text style={styles.vtDesc}>{item.expiryDate}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyVouchers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  vchImg: {
    borderRadius: 8,
  },
  vchTitle: {
    marginTop: 10,
  },
  vt: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
  },
  expiryContainer: {
    flexDirection: "row",
    marginTop: 8,
    gap: 15,
  },
  eText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
  },
  vtDesc: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    color: "#FF8A00",
  },
});
