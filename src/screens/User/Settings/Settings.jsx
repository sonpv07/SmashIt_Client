import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { COLORS } from "../../../theme/colors";
import { SIZE } from "../../../theme/fonts";
import VectorIcon from "../../../components/Atoms/VectorIcon";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../context/AuthContext";
import Divider from "../../../components/Atoms/Divider";
import { convertRole } from "../../../utils";

export default function Settings() {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const directoryPlayer = [
    {
      title: "Ưu đãi tiết kiệm",
      data: [
        { navigate: "Rewards", icon: "award", name: "Tích điểm", isNew: true },
        { navigate: "", icon: "tag", name: "Kho voucher", isNew: true },
      ],
    },
    {
      title: "Tài khoản của tôi",
      data: [
        {
          navigate: "FavoriteCourt",
          icon: "heart",
          name: "Địa điểm yêu thích",
          isNew: false,
        },
        { navigate: "", icon: "map-pin", name: "Đã đặt trước", isNew: true },
        {
          navigate: "BookedHistory",
          icon: "calendar",
          name: "Lịch sử đặt sân",
          isNew: false,
        },
        { navigate: "", icon: "box", name: "Quản lý sản phẩm", isNew: true },
      ],
    },
    {
      title: "Tổng quát",
      data: [
        { navigate: "", icon: "globe", name: "Ngôn ngữ", isNew: true },
        {
          navigate: "",
          icon: "message-circle",
          name: "Chia sẻ phản hồi",
          isNew: true,
        },
      ],
    },
  ];

  const directoryCourtOwner = [
    {
      title: "Ưu đãi tiết kiệm",
      data: [
        { navigate: "Pakage", icon: "tag", name: "Gói dịch vụ", isNew: true },
      ],
    },
    {
      title: "Tài khoản của tôi",
      data: [
        {
          navigate: "BookingManagement",
          icon: "heart",
          name: "Địa điểm của tôi",
          isNew: false,
        },
        {
          navigate: "CourtRevenue",
          icon: "map-pin",
          name: "Quản lí doanh thu sân",
          isNew: true,
        },
        {
          navigate: "",
          icon: "box",
          name: "Quản lí sản phẩm",
          isNew: false,
        },
        {
          navigate: "FinancialBook",
          icon: "box",
          name: "Sổ thu chi",
          isNew: true,
        },
      ],
    },
    {
      title: "Tổng quát",
      data: [
        { navigate: "", icon: "globe", name: "Ngôn ngữ", isNew: false },
        {
          navigate: "",
          icon: "message-circle",
          name: "Chia sẻ phản hồi",
          isNew: false,
        },
      ],
    },
  ];

  const handleNavigate = (linkTo) => {
    navigation.navigate(linkTo);
  };
  const setting = () => {};
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.account}>
          <Text style={styles.name}>{user?.fullName}</Text>
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => navigation.navigate("MyProfile")}
          >
            <Image
              style={styles.avatarImage}
              source={{ uri: "https://avatar.iran.liara.run/public/boy" }}
            />
          </TouchableOpacity>
        </View>
        <View>
          {convertRole(user?.roleId) === "player" &&
            directoryPlayer.map((section, index) => {
              return (
                <View key={index} style={styles.container}>
                  <Text style={styles.title}>{section.title}</Text>
                  <View style={{ gap: 15 }}>
                    {section.data.map((item, index) => {
                      return (
                        <View style={{ gap: 15 }} key={index}>
                          <TouchableOpacity
                            onPress={() => handleNavigate(item.navigate)}
                          >
                            <View
                              style={[
                                styles.item,
                                {
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                },
                              ]}
                            >
                              <View style={[styles.item]}>
                                <View>
                                  <VectorIcon.Feather
                                    name={item.icon}
                                    size={22}
                                  />
                                </View>
                                <Text style={styles.content}>{item.name}</Text>
                              </View>
                              <View
                                style={[styles.item, { alignItems: "center" }]}
                              >
                                {item.isNew && (
                                  <View
                                    style={{
                                      backgroundColor: COLORS.orangeText,
                                      paddingHorizontal: 5,
                                      borderRadius: 14,
                                    }}
                                  >
                                    <Text
                                      style={[
                                        styles.content,
                                        { color: COLORS.white },
                                      ]}
                                    >
                                      Mới
                                    </Text>
                                  </View>
                                )}

                                <VectorIcon.FontAwesome5
                                  name="chevron-right"
                                  size={15}
                                />
                              </View>
                            </View>

                            {/* <View style={styles.hr} /> */}
                          </TouchableOpacity>

                          {section.data.length - 1 !== index && (
                            <Divider
                              orientation={"horizontal"}
                              color={"#E8E8E8"}
                            />
                          )}
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}

          {convertRole(user?.roleId) === "courtOwner" &&
            directoryCourtOwner.map((section, index) => {
              return (
                <View key={index} style={styles.container}>
                  <Text style={styles.title}>{section.title}</Text>
                  <View style={{ gap: 15 }}>
                    {section.data.map((item, index) => {
                      return (
                        <View style={{ gap: 15 }} key={index}>
                          <TouchableOpacity
                            onPress={() => handleNavigate(item.navigate)}
                          >
                            <View
                              style={[
                                styles.item,
                                {
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                },
                              ]}
                            >
                              <View style={[styles.item]}>
                                <View>
                                  <VectorIcon.Feather
                                    name={item.icon}
                                    size={22}
                                  />
                                </View>
                                <Text style={styles.content}>{item.name}</Text>
                              </View>
                              <View
                                style={[styles.item, { alignItems: "center" }]}
                              >
                                {item.isNew && (
                                  <View
                                    style={{
                                      backgroundColor: COLORS.orangeText,
                                      paddingHorizontal: 5,
                                      borderRadius: 14,
                                    }}
                                  >
                                    <Text
                                      style={[
                                        styles.content,
                                        { color: COLORS.white },
                                      ]}
                                    >
                                      Mới
                                    </Text>
                                  </View>
                                )}

                                <VectorIcon.FontAwesome5
                                  name="chevron-right"
                                  size={15}
                                />
                              </View>
                            </View>

                            {/* <View style={styles.hr} /> */}
                          </TouchableOpacity>

                          {section.data.length - 1 !== index && (
                            <Divider
                              orientation={"horizontal"}
                              color={"#E8E8E8"}
                            />
                          )}
                        </View>
                      );
                    })}
                  </View>
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
    backgroundColor: COLORS.orangeText,
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
    paddingHorizontal: 15,
    marginTop: 30,
    gap: 20,
  },
  title: {
    fontFamily: "quicksand-bold",
    fontSize: SIZE.size_16,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    // paddingVertical: 15,
  },
  content: {
    fontFamily: "quicksand-medium",
    fontSize: SIZE.size_14,
  },
  hr: {
    borderWidth: 1,
    borderColor: COLORS.lightGreyBorder,
  },
});
