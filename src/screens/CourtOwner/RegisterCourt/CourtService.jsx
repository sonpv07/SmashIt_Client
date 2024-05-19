import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZE } from "../../../theme/fonts";
import InputField from "../../../components/Molecules/InputField";

export default function CourtService() {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>
        Hãy chọn những dịch vụ hiện đang có ở địa điểm sân của bạn.
      </Text>

      <View style={{ gap: 20 }}>
        <InputField
          inputType={"icon"}
          primaryText={"Thêm dịch vụ tiện ích"}
          placeholderText={"Dịch vụ"}
        />
        <View>
          <InputField primaryText={"Gợi ý dịch vụ"} />
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <Text style={styles.titleText}>Dịch vụ được thêm</Text>
            <Text style={styles.titleText}>5 / 10 </Text>
          </View>
        </View>
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

  titleText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
  },
});
