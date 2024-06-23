import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SIZE } from "../../theme/fonts";
import TopContent from "./TopContent";
import VectorIcon from "./VectorIcon";

export default function HeaderBar({
  text,
  goBack,
  isGoBack,
  type,
  endIcon,
  endIconNavigate,
}) {
  return (
    <View>
      {type === "dateTime" ? (
        <View style={styles.container}>
          {isGoBack && (
            <TouchableWithoutFeedback onPress={goBack}>
              <AntDesign
                name="arrowleft"
                size={18}
                style={{ position: "absolute", left: 20 }}
              />
            </TouchableWithoutFeedback>
          )}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text style={styles.text}>
              {text}{" "}
              <Text style={{ color: COLORS.darkGreenText }}>Tháng 3, 2024</Text>
            </Text>

            <VectorIcon.AntDesign name="caretdown" size={14} />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          {isGoBack && (
            <TouchableWithoutFeedback onPress={goBack}>
              <AntDesign
                name="arrowleft"
                size={18}
                style={{ position: "absolute", left: 20 }}
              />
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity
            onPress={endIconNavigate}
            style={{ position: "absolute", right: 20 }}
            activeOpacity={0.7}
          >
            <VectorIcon.AntDesign name={endIcon} size={20} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
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
