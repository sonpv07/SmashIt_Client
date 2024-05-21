import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZE } from "../../../theme/fonts";
import Divider from "../../../components/Atoms/Divider";
import ChipList from "../../../components/Organisms/ChipList";
import { COLORS } from "../../../theme/colors";

export default function CourtOverview() {
  const serviceList = [
    "Wi-fi",
    "Tổ chức giải đấu",
    "Giữ xe miễn phí",
    "Quầy giữ đồ",
    "Chăm sóc y tế",
    "Canteen",
  ];

  const conditionList = [
    "Đặt sân theo giờ cố định và thông báo trước để tránh xung đột về thời gian.",
    "Tuân theo giờ đã đặt và không sử dụng sân lâu hơn thời gian đã định",
    "Mặc trang phục thích hợp và giày thể thao không làm hỏng bề mặt sân.",
    "Giữ sân sạch sẽ và không làm hỏng hạng mục cầu lông hoặc cơ sở vật chất.",
  ];

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.section}>
        <Text style={[styles.title, { marginBottom: 10 }]}>
          Sân cầu lông Quân Đội
        </Text>

        <Text style={styles.address}>
          41 Đường 41, Phường Bình Trưng Tây, Quận 2, Thành phố Hồ Chí Minh
        </Text>
      </View>

      <Divider color={"#E8E8E8"} orientation={"horizontal"} />

      <View style={styles.section}>
        <Text style={[styles.title, { marginBottom: 15 }]}>Cơ sở vật chất</Text>
        <ChipList
          dataList={serviceList}
          borderColor={"rgba(217, 217, 217, 0.5)"}
          backgroundColor={COLORS.white}
          textFamily={"quicksand-regular"}
        />
      </View>

      <Divider color={"#E8E8E8"} orientation={"horizontal"} />

      <View style={styles.section}>
        <Text style={[styles.title, { marginBottom: 15 }]}>
          Quy định sử dụng sân
        </Text>
        <View style={{ flex: 1, gap: 5 }}>
          {conditionList.map((data, index) => {
            return (
              <View key={index} style={{ flexDirection: "row", gap: 8 }}>
                <Text>{"\u2022"}</Text>

                <Text style={styles.conditionText}>{data}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },

  section: {
    flex: 1,
  },

  title: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
  },

  address: {
    fontSize: SIZE.size_14,
    color: "#5B5B5B",
    fontFamily: "quicksand-medium",
  },

  conditionText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-regular",
    flex: 1,
  },
});
