import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/Atoms/HeaderBar";

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderBar text={"Trang Chu"} />
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    color: COLORS.black,
    fontSize: 18,
  },
});
