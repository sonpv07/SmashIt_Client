import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function AntDesignIcon({ name, color, size, rotate }) {
  return (
    <AntDesign
      name={name}
      color={color}
      size={size}
      style={rotate && styles.rotate}
    />
  );
}

const styles = StyleSheet.create({
  rotate: {
    transform: [{ rotate: "90deg" }],
  },
});
