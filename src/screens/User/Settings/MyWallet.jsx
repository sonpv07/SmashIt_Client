import { ScrollView, TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import icons from "../../../constants/icons";
import { SIZE } from "../../../theme/fonts";
import { add } from "date-fns";

const transactionLog = [
  {
    id: 1,
    logTitle: "Lượt đặt sân",
    action: "withdrawn",
    amount: "100.000",
    timeStamp: "Thứ 3, 5 Th06, 2024, 15:00",
  },
  {
    id: 2,
    logTitle: "Lượt đặt sân",
    action: "withdrawn",
    amount: "100.000",
    timeStamp: "Thứ 3, 5 Th06, 2024, 15:00",
  },
  {
    id: 2,
    logTitle: "Lượt đặt sân",
    action: "withdrawn",
    amount: "100.000",
    timeStamp: "Thứ 3, 5 Th06, 2024, 15:00",
  },
  {
    id: 2,
    logTitle: "Lượt đặt sân",
    action: "withdrawn",
    amount: "100.000",
    timeStamp: "Thứ 3, 5 Th06, 2024, 15:00",
  },
  {
    id: 2,
    logTitle: "Lượt đặt sân",
    action: "withdrawn",
    amount: "100.000",
    timeStamp: "Thứ 3, 5 Th06, 2024, 15:00",
  },
];

const MyWallet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        text={"Ví của tôi"}
        isGoBack={true}
        goBack={() => navigate.goBack()}
      />
      <View style={styles.walletContainer}>
        <Text style={styles.myBalance}>Số dư của bạn</Text>
        <Text style={styles.balance}>VNĐ 350.000</Text>
        <View style={styles.historyBalance}>
          <Image source={icons.increase} />
          <Text style={styles.amount}>VNĐ 12.000</Text>
          <Text style={styles.timeStamp}>15 phút trước</Text>
        </View>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={[styles.add, { backgroundColor: "#094978" }]}>
          <Image source={icons.withdrawn} />
          <Text style={styles.btnText}>Rút tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.add, { backgroundColor: "#299083" }]}>
          <Image source={icons.add} />
          <Text style={styles.btnText}>Nạp tiền</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Lịch sử giao dịch</Text>
      <ScrollView>
        {transactionLog.map((item, index) => (
          <View
            key={index}
            style={[
              styles.transactionContainer,
              {
                marginBottom: index !== transactionLog.length - 1 && 20,
              },
            ]}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <Image source={icons.translog} />
              <View style={styles.transactionDetail}>
                <Text style={styles.tTitle}>{item.logTitle}</Text>
                <Text style={styles.tTime}>{item.timeStamp}</Text>
              </View>
            </View>
            <Text
              style={[
                styles.amount,
                { color: item.action === "add" ? "#2A9083" : "#FF0854" },
              ]}
            >
              {item.action === "add" ? "+" : "-"} {item.amount}đ
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  walletContainer: {
    marginTop: 25,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 20,
    backgroundColor: "#F37148",
    marginHorizontal: 15,
  },
  myBalance: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
    color: "white",
  },
  balance: {
    fontSize: 24,
    fontFamily: "quicksand-bold",
    color: "white",
    marginTop: 10,
    marginBottom: 20,
  },
  historyBalance: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  amount: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
    color: "#2A9083",
  },
  timeStamp: {
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-semibold",
    color: "#939393",
  },
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginTop: 30,
  },
  add: {
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    width: 170,
    alignItems: "center",
  },
  btnText: {
    marginTop: 15,
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
    color: "white",
  },
  title: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  tTile: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
    marginBottom: 5,
  },
  tTime: {
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-medium",
    color: "#A1A1A1",
  },
  amount: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
  },
});
