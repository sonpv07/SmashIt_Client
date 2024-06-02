import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import DatePickerSlider from "../../../components/Organisms/DatePicker";
import CourtCodeCard from "../../../components/Organisms/CourtCodeCard";
import SlotChip from "../../../components/Molecules/SlotChip";
import VectorIcon from "../../../components/Atoms/VectorIcon";
import { SIZE } from "../../../theme/fonts";
import { COLORS } from "../../../theme/colors";
import moment from "moment";
import "moment/locale/vi";
import Chip from "../../../components/Atoms/Chip";
import Divider from "../../../components/Atoms/Divider";
import { METRICS } from "../../../theme/metrics";
import StepDot from "../../../components/Molecules/StepDot";
import CourtInfo from "../../../components/Organisms/CourtInfo";
import { useNavigation } from "@react-navigation/native";

export default function BookingCourt() {
  const navigation = useNavigation();

  const [isShowDetail, setIsShowDetail] = useState(false);

  const [chosenSlot, setChosenSlot] = useState(0);

  const [chosenDate, setChosenDate] = useState(new Date());
  const [chosenCourt, setChosenCourt] = useState(0);

  const formatDate = (date) => {
    const formattedDate = moment(date).locale("vi").format("dddd, DD/MM/YYYY");

    const capitalizedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return capitalizedDate;
  };
  const numberOfCourt = [1, 2, 3, 4];
  const [currentCourt, setCurrentCourt] = useState(1);
  const [totalPrice, setTotalPrice] = useState(10 );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBar
        text={"Thông tin đặt sân"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />
      <ScrollView style={{ flex: 1, marginBottom: 135 }}>
        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
          <CourtInfo />
        </View>

        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <DatePickerSlider
            chosenDate={chosenDate}
            setChosenDate={setChosenDate}
          />
        </View>
        <View style={styles.container}>
          <View style={{ width: "100%" }}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={(e) => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentCourt(
                  Number((x / METRICS.screenWidth).toFixed(0)) + 1
                );
                // console.log(currentCourt);
              }}
              style={
                {
                  // backgroundColor: 'cyan',
                }
              }
            >
              {numberOfCourt.map((court, index) => {
                return (
                  <View key={index} style={{ width: METRICS.screenWidth - 30 }}>
                    <CourtCodeCard />
                  </View>
                );
              })}
            </ScrollView>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <StepDot
                currentStep={currentCourt}
                quantity={numberOfCourt.length}
              />
            </View>
          </View>

          <SlotChip
            chosenSlot={chosenSlot}
            isCourtOwner={true}
            setChosenSlot={setChosenSlot}
          />
        </View>
      </ScrollView>

      <View style={[styles.noteSections]}>
        <View style={styles.noteSection}>
          <View style={styles.noteItem}>
            <View
              style={[
                styles.noteIcon,
                {
                  backgroundColor: "rgba(117, 117, 117, 0.10)",
                },
              ]}
            >
              <VectorIcon.AntDesign name="clockcircleo" size={12} />
            </View>
            <Text style={styles.noteText}>Đã đặt</Text>
          </View>

          <View style={styles.noteItem}>
            <View
              style={[
                styles.noteIcon,
                {
                  backgroundColor: "rgba(42, 144, 131, 0.1)",
                },
              ]}
            >
              <VectorIcon.AntDesign
                name="clockcircleo"
                size={12}
                color={COLORS.darkGreenText}
              />
            </View>
            <Text style={styles.noteText}>Còn trống</Text>
          </View>

          <View style={styles.noteItem}>
            <View
              style={[
                styles.noteIcon,
                {
                  backgroundColor: COLORS.orangeBackground,
                },
              ]}
            >
              <VectorIcon.AntDesign
                name="clockcircleo"
                size={12}
                color={COLORS.orangeText}
              />
            </View>
            <Text style={styles.noteText}>Đang chọn</Text>
          </View>
        </View>

        <View
          style={[
            styles.noteSection,
            { justifyContent: "space-between", paddingHorizontal: 10 },
          ]}
        >
          <View>
            <View
              style={{ alignItems: "center", flexDirection: "row", gap: 15 }}
            >
              <Text style={styles.noteText}>Tạm tính:</Text>
              <Text style={styles.totalPrice}>{totalPrice} đ</Text>
            </View>
            {totalPrice !== 0 && (
              <View
                style={{ alignItems: "center", flexDirection: "row", gap: 15 }}
              >
                <View style={{ alignItems: "center", flexDirection: "row"}}>
                  <VectorIcon.Entypo
                    name="dot-single"
                    size={20}
                    color={COLORS.darkGreenText}
                  />
                  <Text>{chosenCourt} sân</Text>
                </View>
                <View style={{ alignItems: "center", flexDirection: "row"}}>
                  <VectorIcon.Entypo
                    name="dot-single"
                    size={20}
                    color={COLORS.darkGreenText}
                  />
                  <Text>{chosenSlot} khung giờ</Text>
                </View>
              </View>
            )}
          </View>

          <View>
            <TouchableOpacity
              disabled={totalPrice === 0}
              onPress={() => {
                navigation.navigate("Payment");
              }}
              style={[
                {
                  borderColor: "none",
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 6,
                  backgroundColor:
                    totalPrice === 0
                      ? COLORS.greyBackground
                      : COLORS.orangeText,
                },
              ]}
            >
              <Text
                style={{
                  color: totalPrice === 0 ? COLORS.greyText : COLORS.white,
                }}
              >
                Tiếp tục
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // backgroundColor: 'pink',
    marginTop: 20,
    paddingHorizontal: 15,
    gap: 30,
    position: "relative",
  },

  noteSections: {
    width: "100%",
    bottom: 0,
    position: "absolute",
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  noteSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
  },
  noteItem: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  noteText: {
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-semibold",
    justifyContent: "center",
    color: COLORS.greyText,
  },
  totalPrice: {
    fontFamily: "quicksand-bold",
    fontSize: SIZE.size_18,
    color: COLORS.darkGreenText,
  },

  noteIcon: {
    padding: 8,
    borderRadius: 8,
  },

  slotInformation: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    borderTopColor: "#E8E8E8",
    borderTopWidth: 2,
    borderRadius: 6,
  },

  dateTimeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  dateText: {
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-semibold",
  },

  slot: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  slotText: {
    fontSize: SIZE.size_10,
    fontFamily: "quicksand-medium",
  },

  customerInforSection: {
    gap: 24,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  title: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
  },

  inforContainer: {
    gap: 20,
    marginBottom: 15,
  },

  inforItem: {
    gap: 15,
  },

  inforItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  primaryText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
  },

  secondaryText: {
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-regular",
  },

  buttonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: "quicksand-bold",
    fontSize: SIZE.size_14,
  },

  notBookedSection: {
    marginBottom: 15,
    alignItems: "center",
  },

  notBookedItem: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 40,
  },

  notBookedText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-regular",
    color: "#757575",
  },
});
