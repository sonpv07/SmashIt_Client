import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SIZE } from "../../theme/fonts";

const CustomButton = ({
  title,
  width,
  backgroundColor,
  height,
  color,
  icon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        {
          width: width,
          backgroundColor: backgroundColor,
          height: height,
        },
      ]}
    >
      {icon && <Image source={icon} resizeMode="contain" style={styles.icon} />}
      <Text style={[styles.textButton, { color: color ? color : "#1F1F1F" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  textButton: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
