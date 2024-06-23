import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopContent from "../../../components/Atoms/TopContent";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import HistoryCourt from "../../../components/Organisms/HistoryCourt";
import { COLORS } from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import TabBar from "../../../components/Molecules/TabBar";
import { SIZE } from "../../../theme/fonts";
import images from "../../../constants/images";

const BookedHistory = () => {
  const bookedHistory = [1, 2, 3, 4, 5, 6, 7, 8];
  const reserveCourts = [1, 2, 3];
  const navigation = useNavigation();
  const [tab, setTab] = useState(1);

  const courts = {
    id: 1,
    name: "Sân cầu lông Quân Đội",
    numOfCourt: "1",
    numOfSlot: "2",
    bookingTime: "20 Th5 2024, 16:00",
    price: "100.000",
    paymentMethod: "Thanh toán tại sân",
  };

  const Reserve = () => {
    return bookedHistory.map((court, index) => {
      return (
        <View key={index}>
          <HistoryCourt
            name={courts.name}
            numOfCourt={courts.numOfCourt}
            numOfSlot={courts.numOfSlot}
            bookingTime={courts.bookingTime}
            price={courts.price}
            paymentMethod={courts.paymentMethod}
          />
          <View style={styles.hr} />
        </View>
      );
    });
  };

  const HistoryBooked = () => {
    return reserveCourts.map((court, index) => {
      return (
        <View key={index}>
          <HistoryCourt
            name={courts.name}
            numOfCourt={courts.numOfCourt}
            numOfSlot={courts.numOfSlot}
            bookingTime={courts.bookingTime}
            price={courts.price}
            paymentMethod={courts.paymentMethod}
          />
          <View style={styles.hr} />
        </View>
      );
    });
  };
  const tabItems = [
    {
      id: 1,
      name: "Đã đặt trước",
      component: <Reserve />,
    },
    {
      id: 2,
      name: "Lịch sử đặt sân",
      component: <HistoryBooked />,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar
        isGoBack={true}
        goBack={() => navigation.goBack()}
        text={"Lịch sử đặt sân"}
      />
      <View style={{ backgroundColor: "white", marginVertical: 3 }}>
        <TabBar
          tabItem={tabItems}
          fontSize={SIZE.size_14}
          setTab={setTab}
          currentTab={tab}
        />
      </View>
      <ScrollView style={styles.bookedCourt}>
        {tabItems.map(
          (item, index) =>
            item.id === tab && (
              <View key={item.id} style={{ flex: 1, width: "100%" }}>
                {item.component}
              </View>
            )
        )}
      </ScrollView>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookedCourt: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 20,
    flex: 1,
  },
  hr: {
    borderWidth: 1,
    borderColor: COLORS.greyBackground,
    marginVertical: 20,
  },
});

export default BookedHistory;
