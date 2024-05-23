import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import { COLORS } from "../../../theme/colors";
import InputField from "../../../components/Molecules/InputField";
import { SIZE } from "../../../theme/fonts";

export default function CreateBooking({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBar
        text={"Tạo lịch đặt sân"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <InputField
          inputType={"normal"}
          placeholderText={"Họ và tên"}
          primaryText={"Họ và tên khách hàng"}
        />
        <InputField
          inputType={"normal"}
          placeholderText={"Số điện thoại"}
          primaryText={"Số điện thoại khách hàng"}
        />
        <InputField
          inputType={"dropdown"}
          placeholderText={"Hình thức thanh toán"}
          primaryText={"Hình thức thanh toán"}
        />
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tạo lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15,
    gap: 15,
  },

  buttonSection: {
    position: "relative",
    bottom: 35,
    paddingHorizontal: 25,
  },

  button: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: COLORS.orangeText,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
    color: "white",
  },
});
