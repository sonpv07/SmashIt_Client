import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: COLORS.black,
    fontSize: 18,
  },
});
