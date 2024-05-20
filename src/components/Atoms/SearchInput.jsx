import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../theme/colors";
import { SIZE } from "../../theme/fonts";

const InputComponent = (props) => {
  // const [input, setInput] = useState("as");
  return (
    <View style={[styles.outline, { backgroundColor: props.backgroundColor }]}>
      <View style={styles.search}>
        <Icon name={"search"} size={28} color={COLORS.orangeText} />
      </View>
      <TextInput
        style={[styles.input, { fontSize: SIZE.size_14 }]}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    aspectRatio: 7 / 1,
  },
  search: {
    width: undefined,
    aspectRatio: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    paddingVertical: 10,
    height: "100%",
    paddingRight: 10,
    overflow: "hidden",

    marginRight: 20,
  },
});

export default InputComponent;
