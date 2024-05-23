import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../theme/colors";
import { SIZE } from "../../../theme/fonts";
import VectorIcon from "../../../components/Atoms/VectorIcon";
import { useNavigation } from "@react-navigation/native";

export default function MyProfile() {

  const navigation = useNavigation();

  const directory = [
    {
      title: "Ưu đãi tiết kiệm",
      data: [
        { navigate: "", icon: "award", name: "Tích điểm" },
        { navigate: "", icon: "tag", name: "Kho voucher" },
      ],
    },
    {
      title: "Tài khoản của tôi",
      data: [
        { navigate: "FavoriteCourt", icon: "heart", name: "Địa điểm yêu thích" },
        { navigate: "", icon: "map-pin", name: "Đã đặt trước" },
        { navigate: "BookedHistory", icon: "calendar", name: "Lịch sử đặt sân" },
        { navigate: "", icon: "box", name: "Quản lý sản phẩm" },
      ],
    },
    {
      title: "Tổng quát",
      data: [
        { navigate: "", icon: "globe", name: "Ngôn ngữ" },
        { navigate: "", icon: "message-circle", name: "Chia sẻ phản hồi" },
      ],
    },
  ];

  const handleNavigate = (linkTo) => {
    navigation.navigate(linkTo)
  }
  const setting = () => {};
  return (
    <View>
      <ScrollView>
        <View style={styles.account}>
          <Text style={styles.name}>Nguyễn Minh Anh</Text>
          <View style={styles.avatar}>
            <Image
              style={styles.avatarImage}
              source={{ uri: "https://avatar.iran.liara.run/public/boy" }}
            />
          </View>
        </View>
        <View>
          {directory.map((section) => {
            return (
              <View style={styles.container}>
                <Text style={styles.title}>{section.title}</Text>
                {section.data.map((item) => {
                  return (
                    <TouchableOpacity onPress={() => handleNavigate(item.navigate)}>
                      <View
                        style={[
                          styles.item,
                          { justifyContent: "space-between" },
                        ]}
                      >
                        <View style={[styles.item]}>
                          <View>
                            <VectorIcon.Feather name={item.icon} size={22} />
                          </View>
                          <Text style={styles.content}>{item.name}</Text>
                        </View>
                        <View style={styles.item}>
                          <View
                            style={{
                              backgroundColor: COLORS.orangeText,
                              paddingHorizontal: 5,
                              borderRadius: 14,
                            }}
                          >
                            <Text
                              style={[styles.content, { color: COLORS.white }]}
                            >
                              Mới
                            </Text>
                          </View>
                          <VectorIcon.FontAwesome5 name="chevron-right" size={15} />
                        </View>
                      </View>
                      <View style={styles.hr} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  account: {
    width: "100%",
    aspectRatio: 2.5,
    backgroundColor: COLORS.darkGreenText,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  name: {
    fontFamily: "quicksand-bold",
    fontSize: SIZE.size_22,
    color: COLORS.white,
  },
  avatar: {
    height: "50%",
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: 100,
  },
  avatarImage: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontFamily: "quicksand-bold",
    fontSize: SIZE.size_16,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 15,
  },
  content: {
    fontFamily: "quicksand-semibold",
    fontSize: SIZE.size_14,
  },
  hr: {
    borderWidth: 1,
    borderColor: COLORS.lightGreyBorder,
  },
});
