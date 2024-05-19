import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZE } from "../../../theme/fonts";
import InputField from "../../../components/Molecules/InputField";

export default function CourtInformation() {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>
        Để đảm bảo sự và thuận tiện cho việc truy cập và đặt sân cho người chơi,
        hãy cung cấp thêm chi tiết về vị trí sân của bạn.
      </Text>

      <View style={{ gap: 20 }}>
        <InputField inputType={"image"} primaryText={"Ảnh đại diện sân"} />
        <InputField
          inputType={"normal"}
          primaryText={"Tên sân"}
          placeholderText={"Tên sân"}
        />
        <InputField inputType={"number"} primaryText={"Số lượng sân"} />
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
