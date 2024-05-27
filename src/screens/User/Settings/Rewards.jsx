import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import icons from "../../../constants/icons";
import images from "../../../constants/images";
import VectorIcon from "../../../components/Atoms/VectorIcon";
import { SIZE } from "../../../theme/fonts";

const vouchers = [
  {
    id: 1,
    title:
      "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu qua ứng dụng SmashIt",
    points: 1000,
    image: images.voucher,
  },
  {
    id: 2,
    title: "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu",
    points: 2000,
    image: images.voucher,
  },
  {
    id: 3,
    title: "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu",
    points: 2000,
    image: images.voucher,
  },
];

const myVouchers = [
  {
    id: 1,
    title:
      "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu qua ứng dụng SmashIt",
    expiryDate: "11/04/2024",
    image: images.voucher,
  },
  {
    id: 1,
    title:
      "Ưu đãi thành viên mới, giảm 10% khi đặt sân lần đầu qua ứng dụng SmashIt",
    expiryDate: "11/04/2024",
    image: images.voucher,
  },
];

const Rewards = ({}) => {
  // const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.greenBg}>
          <TouchableOpacity>
            <Image source={icons.goback_white} style={styles.goback} />
          </TouchableOpacity>
          <Text style={styles.title}>Ưu đãi tiết kiệm</Text>
        </View>
        <View style={styles.pointPadding}>
          <View style={styles.pointContainer}>
            <View style={styles.pointSide}>
              <Image source={images.coin} />
              <View>
                <Text style={styles.mpTitle}>SmashIt Point của bạn</Text>
                <Text style={styles.mpPoint}>50 điểm</Text>
              </View>
            </View>
            <VectorIcon.FontAwesome5 name="chevron-right" size={15} />
          </View>
        </View>
        <View style={styles.exchangeContainer}>
          <Text style={styles.changePoint}>Đổi điểm nhận ưu đãi</Text>
          <FlatList
            data={vouchers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.vchContainer, { width: width - 30 }]}>
                <Image
                  source={item.image}
                  style={[styles.vchImage, { width: width - 30 }]}
                />
                <Text style={styles.vchTitle}>{item.title}</Text>
                <View style={styles.pointNeed}>
                  <Text style={styles.pn}>Điểm cần đạt</Text>
                  <View style={styles.mp}>
                    <Image
                      source={images.coin}
                      style={{ width: 16, height: 16, gap: 8 }}
                    />
                    <Text style={styles.pnPoints}>{item.points}</Text>
                  </View>
                </View>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{ marginTop: 20 }}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / (width - 30)
              );
              setSelectedIndex(index); // Update selected index on scroll
            }}
          />
          <View style={styles.circleContainer}>
            {vouchers.map((item, index) => (
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      index === selectedIndex ? "#F0822B" : "#ccc",
                  },
                ]}
              ></View>
            ))}
          </View>
        </View>

        <Text style={styles.mvTitle}>Kho khuyến mãi của tôi</Text>
        <View style={styles.myVoucher}>
          {myVouchers.map((item, index) => (
            <View style={[styles.vchContainer, { width: width - 30 }]}>
              <Image
                source={item.image}
                style={[styles.vchImage, { width: width - 30 }]}
              />
              <Text style={styles.vchTitle}>{item.title}</Text>
              <View style={styles.pointNeed}>
                <Text style={styles.pn}>Sẽ hết hạn vào </Text>
                <View style={styles.mp}>
                  <Text style={styles.expiryDate}>{item.expiryDate}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greenBg: {
    backgroundColor: "#2A9083",
    paddingTop: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 60,
  },
  goback: {
    width: 28,
    height: 28,
  },
  title: {
    color: "#fff",
    fontSize: SIZE.size_18,
    fontFamily: "quicksand-bold",
  },
  pointContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
  },
  pointPadding: {
    paddingHorizontal: 12,
    position: "absolute",
    width: "100%",
    top: 66,
  },
  pointSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  mpTitle: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-regular",
  },
  mpPoint: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
    marginTop: 2,
  },
  exchangeContainer: {
    marginTop: 70,
    paddingHorizontal: 15,
  },
  changePoint: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
  },
  vchImage: {
    borderRadius: 8,
  },
  vchTitle: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    marginTop: 10,
    marginBottom: 8,
  },
  pointNeed: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  pn: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
  },
  pnPoints: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    color: "#2A9083",
  },
  mp: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2A9083",
    marginHorizontal: 5,
  },
  mvTitle: {
    marginTop: 30,
    paddingLeft: 15,
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
    marginBottom: 20,
  },
  myVoucher: {
    alignItems: "center",
    paddingBottom: 30,
    gap: 25,
  },
  expiryDate: {
    color: "#F0822B",
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
  },
});
