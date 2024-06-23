import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../theme/colors";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import icons from "../../../constants/icons";
import { SIZE } from "../../../theme/fonts";
import TabBar from "../../../components/Molecules/TabBar";
import InputField from "../../../components/Molecules/InputField";

export default function CreateFinancialActivities({ navigation }) {
  const [tab, setTab] = useState(1);

  const [chosenService, setChosenService] = useState(null);

  const [isOpenSheet, setIsOpenSheet] = useState(false);

  const actvitiyList = [
    {
      id: 1,
      name: "Sân cầu",
      image: icons.court,
    },
    {
      id: 2,
      name: "Quảng cáo",
      image: icons.ads2,
    },
    {
      id: 3,
      name: "Giải đấu",
      image: icons.tournament,
    },
    {
      id: 4,
      name: "Điện nước",
      image: icons.water,
    },
  ];

  const tabItem = [
    { id: 1, name: "Thu nhập" },
    {
      id: 2,
      name: "Chi phí",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBar
        text={"Sổ thu chi"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />

      <TabBar
        tabItem={tabItem}
        currentTab={tab}
        setTab={setTab}
        tabBarStyle={{ justifyContent: "space-around", marginTop: 0 }}
        fontSize={16}
      />

      <KeyboardAvoidingView style={styles.container}>
        <FlatList
          data={actvitiyList}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => {
            return (
              <View style={{ alignItems: "center", gap: 8 }}>
                <TouchableOpacity
                  style={[
                    styles.imageContainer,
                    chosenService === item.name && {
                      backgroundColor: COLORS.orangeBackground,
                    },
                  ]}
                  activeOpacity={0.5}
                  onPress={() => {
                    setChosenService(item.name);
                  }}
                >
                  <Image
                    source={item.image}
                    style={[
                      chosenService === item.name
                        ? {
                            tintColor: COLORS.orangeText,
                          }
                        : {
                            tintColor: COLORS.lightGreenText,
                          },

                      item.name === "Quảng cáo" && { width: 32, height: 32 },
                    ]}
                  />
                </TouchableOpacity>

                <Text style={styles.semiboldText}>{item.name}</Text>
              </View>
            );
          }}
        />
      </KeyboardAvoidingView>

      {chosenService && (
        <View style={styles.sheet}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.semiboldText, { fontSize: SIZE.size_16 }]}>
              Loại hình {tab === 1 ? "thu nhập" : "chi phí"}:{" "}
            </Text>
            <Text style={[styles.semiboldText, { fontSize: SIZE.size_16 }]}>
              {chosenService}
            </Text>
          </View>

          <View style={{ gap: 20, marginTop: 20, marginBottom: 30 }}>
            <InputField
              inputType={"normal"}
              primaryText={"Ghi chú"}
              placeholderText={"Nhập ghi chú"}
            />
            <InputField
              inputType={"normal"}
              primaryText={"Ngày tạo"}
              placeholderText={"Chọn ngày tạo"}
            />
            <InputField
              inputType={"normal"}
              primaryText={"Tổng chi phí"}
              placeholderText={"Nhập tổng chi phí"}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={[
                styles.semiboldText,
                { fontSize: SIZE.size_16, color: COLORS.white },
              ]}
            >
              Thêm mục mới
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChosenService(null);
            }}
            style={[
              styles.button,
              {
                backgroundColor: "transparent",
                marginTop: 15,
                borderColor: COLORS.orangeText,
                borderWidth: 1,
              },
            ]}
          >
            <Text
              style={[
                styles.semiboldText,
                { fontSize: SIZE.size_16, color: COLORS.orangeText },
              ]}
            >
              Đóng
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    position: "relative",
  },

  imageContainer: {
    padding: 5,
    backgroundColor: COLORS.lightGreenBackground,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  semiboldText: {
    fontFamily: "quicksand-semibold",
    fontSize: SIZE.size_12,
  },

  sheet: {
    paddingHorizontal: 15,
    // gap: 20,
    position: "relative",
    bottom: 20,
    borderTopWidth: 0.5,
    paddingTop: 10,
    borderRadius: 8,
  },

  button: {
    backgroundColor: COLORS.orangeText,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 8,
  },
});
