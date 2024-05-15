import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import { SIZE, WEIGHT } from "../../theme/fonts";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PackageItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/Court.png")}
        />
        <View style={styles.overlay}></View>
        <View style={styles.ribbon}>
          <Text style={styles.ribbonText}>Bán chạy nhất</Text>
        </View>
        <View style={styles.level}>
          <Text style={[styles.ribbonText, { fontSize: 14 }]}>
            Gói sân cơ bản
          </Text>
        </View>
      </View>

      <View style={styles.nameSection}>
        <Text style={styles.nameText}>
          Cung cấp tính năng cơ bản cho việc quản lý lịch đặt sân cầu lông.
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.priceSection}>
          <Text style={styles.oldPrice}>150.000d </Text>
          <Text style={styles.newPrice}>100.000d / tháng</Text>
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.buttonSection}>
            <Text style={[styles.ribbonText, { color: COLORS.orangeText }]}>
              Xem thêm
            </Text>
            <Icon
              name="arrow-circle-right"
              size={14}
              color={COLORS.orangeText}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  imageSection: {
    width: "100%",
    height: 156,
    position: "relative",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },

  ribbon: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: COLORS.orangeText,
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 28,
    borderRadius: 15,
    zIndex: 11,
  },

  ribbonText: {
    color: "white",
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-bold",
    lineHeight: 18,
  },

  level: {
    position: "absolute",
    bottom: 20,
    left: 20,
    zIndex: 11,
  },

  nameSection: {
    width: "100%",
    marginBottom: 10,
  },

  nameText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    fontWeight: WEIGHT.weight_600,
    lineHeight: 18,
  },

  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  priceSection: {
    flexDirection: "row",
    gap: 5,
  },

  oldPrice: {
    fontSize: SIZE.size_12,
    color: "#888",
    fontFamily: "quicksand-regular",
    lineHeight: 18,
    textDecorationLine: "line-through",
  },

  newPrice: {
    fontSize: SIZE.size_14,
    color: COLORS.darkGreenText,
    fontFamily: "quicksand-semibold",
    fontWeight: WEIGHT.weight_600,
    lineHeight: 18,
  },

  buttonSection: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  iconContainer: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    backgroundColor: COLORS.orangeText,
    alignItems: "center",
    justifyContent: "center",
  },
});
