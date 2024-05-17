import React, { useState } from "react";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { COLORS } from "../../theme/colors";
import { SIZE } from "../../theme/fonts";

const Chip = (props) => {
  const [status, setStatus] = useState(false);
  const isChosenBg =
    status === false
      ? {
          backgroundColor: COLORS.white,
          borderColor: COLORS.darkGreyBorder,
        }
      : {
          backgroundColor: COLORS.darkGreenText,
          borderColor: COLORS.white,
        };
  const isChosen = status === false ? COLORS.black : COLORS.white;
  return (
    <View style={styles.outline}>
      <TouchableOpacity
        style={[styles.chip, isChosenBg]}
        onPress={() => setStatus(!status)}
      >
        <Text style={{color: isChosen}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    outline: {
        display: 'flex',
        alignItems: 'baseline',
    },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: SIZE.size_16,
    borderRadius: 20,
    borderWidth: 1,
  },
});

export default Chip;
