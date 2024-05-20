import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZE } from "../../../theme/fonts";
import InputField from "../../../components/Molecules/InputField";

export default function PaymentMethod() {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>
        Để thuận tiện hơn trong việc giao dịch đặt sân của người chơi và chủ
        sân. Hãy thiết lập phương thức giao dịch{" "}
      </Text>

      <View style={{ gap: 20 }}>
        <InputField
          inputType={"dropdown"}
          primaryText={"Chọn ngân hàng"}
          placeholderText={"Ngân hàng"}
        />

        <InputField
          inputType={"normal"}
          primaryText={"Số tài khoản ngân hàng"}
          placeholderText={"Số tài khoản"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  descriptionText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
    marginBottom: 30,
  },
});
