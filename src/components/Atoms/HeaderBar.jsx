import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SIZE } from "../../theme/fonts";
import TopContent from "./TopContent";

export default function HeaderBar({ text, goBack, isGoBack }) {
  return (
    <View>
      <View style={styles.container}>
        {isGoBack && (
          <TouchableWithoutFeedback onPress={() => goBack()}>
            <AntDesign
              name="arrowleft"
              size={18}
              style={{ position: "absolute", left: 20 }}
            />
          </TouchableWithoutFeedback>
        )}

        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 66,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    flexDirection: "row",
    position: "relative",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  text: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
  },
});
