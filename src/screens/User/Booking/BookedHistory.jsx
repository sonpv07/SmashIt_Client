import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import TopContent from "../../../components/Atoms/TopContent";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import HistoryCourt from "../../../components/Organisms/HistoryCourt";
import { COLORS } from "../../../theme/colors";

const BookedHistory = () => {
  const bookedHistory = [1, 2, 3, 4, 5, 6, 7];

  const courts = {
    name: "Sân cầu lông Quân Đội",
    numOfCourt: "1",
    numOfSlot: "2",
    bookingTime: "20 Th5 2024, 16:00",
    price: "100.000",
    paymentMethod: "Thanh toán tại sân",
  };
  return (
    <View>
      <HeaderBar text={"Lịch sử đặt sân"} />
      <ScrollView style={styles.bookedCourt}>
        {bookedHistory.map((court, index) => {
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
              <View style={styles.hr}/>
            </View>
          );
        })}
      </ScrollView>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookedCourt: {
    height: '100%',
    width: "100%",
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  hr: {
    borderWidth: 1,
    borderColor: COLORS.greyBackground,
    marginVertical: 20,
  }
});

export default BookedHistory;
