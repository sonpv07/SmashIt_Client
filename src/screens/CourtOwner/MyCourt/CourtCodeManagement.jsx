import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import DatePickerSlider from "../../../components/Organisms/DatePicker";
import CourtCodeCard from "../../../components/Organisms/CourtCodeCard";
// import SlotChip from "../../../components/Organisms/SlotChip";
import SlotChip from "../../../components/Molecules/SlotChip";
import VectorIcon from "../../../components/Atoms/VectorIcon";
import { SIZE } from "../../../theme/fonts";
import { COLORS } from "../../../theme/colors";
import moment from "moment";
import "moment/locale/vi";
import Chip from "../../../components/Atoms/Chip";
import Divider from "../../../components/Atoms/Divider";

export default function CourtCodeManagement({ navigation }) {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const [chosenSlot, setChosenSlot] = useState(null);

  const [chosenDate, setChosenDate] = useState(new Date());

  const formatDate = (date) => {
    const formattedDate = moment(date).locale("vi").format("dddd, DD/MM/YYYY");

    const capitalizedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return capitalizedDate;
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBar
        text={"Quản lí sân"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <DatePickerSlider
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
        />
      </View>

      <View style={styles.container}>
        <CourtCodeCard />
        <SlotChip
          chosenSlot={chosenSlot}
          isCourtOwner={true}
          setChosenSlot={setChosenSlot}
        />

        {!chosenSlot && (
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
              <Text style={styles.noteText}>Khung giờ còn trống</Text>
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
              <Text style={styles.noteText}>Khách đã đặt</Text>
            </View>
          </View>
        )}
      </View>

      {chosenSlot && (
        <View style={styles.slotInformation}>
          <View style={styles.dateTimeSection}>
            <Text style={styles.dateText}>
              {formatDate(new Date(chosenDate))}
            </Text>
            <View
              style={[
                styles.slot,
                {
                  backgroundColor: chosenSlot.isOccupied
                    ? "rgba(117,117,117,0.1)"
                    : chosenSlot.isChoose
                    ? COLORS.orangeBackground
                    : "rgba(42,144,131,0.1)",
                },
              ]}
            >
              <Text
                style={[
                  styles.slotText,
                  {
                    color: chosenSlot.isOccupied
                      ? "#757575"
                      : chosenSlot.isChoose
                      ? COLORS.orangeText
                      : "#2A9083",
                  },
                ]}
              >{`${chosenSlot.start} - ${chosenSlot.end}`}</Text>
            </View>
          </View>
          <Divider
            orientation={"horizontal"}
            color={"#E8E8E8"}
            dividerStyle={{ marginTop: 22 }}
          />

          {chosenSlot.isOccupied && (
            <View style={styles.customerInforSection}>
              <Text style={styles.title}>Thông tin khách hàng</Text>
              <View style={styles.inforContainer}>
                <View style={styles.inforItem}>
                  <View style={styles.inforItemContent}>
                    <Text style={styles.secondaryText}>Tên tài khoản</Text>
                    <Text style={styles.primaryText}>Trần Nguyệt Ánh</Text>
                  </View>
                  <Divider orientation={"horizontal"} color={"#E8E8E8"} />
                </View>
                <View style={styles.inforItem}>
                  <View style={styles.inforItemContent}>
                    <Text style={styles.secondaryText}>
                      Phương thức thanh toán
                    </Text>
                    <Text style={styles.primaryText}>MoMo</Text>
                  </View>
                  <Divider orientation={"horizontal"} color={"#E8E8E8"} />
                </View>
                <View style={styles.inforItem}>
                  <View style={styles.inforItemContent}>
                    <Text style={styles.secondaryText}>Số điện thoại</Text>
                    <Text style={styles.primaryText}>0936527365</Text>
                  </View>
                  <Divider orientation={"horizontal"} color={"#E8E8E8"} />
                </View>
              </View>
            </View>
          )}

          {!chosenSlot.isOccupied && (
            <View style={styles.notBookedSection}>
              <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.notBookedItem}>
                  <VectorIcon.Feather name="user" size={16} color={"#222222"} />
                  <Text style={styles.notBookedText}>
                    Chưa có khách hàng nào đặt khung giờ này
                  </Text>
                </View>
              </View>
              <Divider color={"#E8E8E8"} orientation={"horizontal"} />
            </View>
          )}

          {chosenSlot.isOccupied && (
            <View style={styles.buttonSection}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { borderColor: COLORS.orangeText, width: "35%" },
                ]}
              >
                <Text style={[styles.buttonText, { color: COLORS.orangeText }]}>
                  Xóa lịch đặt
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    borderColor: COLORS.orangeText,
                    backgroundColor: COLORS.orangeText,
                    width: "60%",
                  },
                ]}
              >
                <Text style={[styles.buttonText, { color: COLORS.white }]}>
                  Khách đã tới
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {!chosenSlot.isOccupied && (
            <View style={{ paddingHorizontal: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CreateBooking");
                }}
                activeOpacity={0.5}
                style={[
                  styles.button,
                  {
                    borderColor: COLORS.orangeText,
                    backgroundColor: COLORS.orangeText,
                    width: "100%",
                  },
                ]}
              >
                <Text style={[styles.buttonText, { color: COLORS.white }]}>
                  Tạo lịch đặt
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15,
    gap: 30,
  },

  noteSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    position: "relative",
    bottom: 20,
  },

  noteItem: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  noteText: {
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-regular",
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
