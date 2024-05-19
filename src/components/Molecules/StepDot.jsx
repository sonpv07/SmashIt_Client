import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

export default function StepDot({ quantity, currentStep }) {
  const dots = Array.from({ length: quantity }, (item, index) => index);

  return (
    <View style={styles.container}>
      {dots.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dot,
              currentStep === index + 1 && {
                backgroundColor: COLORS.darkGreenText,
              },
            ]}
          ></View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: "grey",
    borderRadius: 10,
  },
});
