import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Divider({ orientation, color, dividerStyle }) {
  const dividerStyles = [
    { width: orientation === "horizontal" ? "100%" : 1 },
    { height: orientation === "vertical" ? "100%" : 1 },
    { backgroundColor: color ? color : "#E8E8E8" },
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
}

const styles = StyleSheet.create({});
