import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBar from "../../../components/Atoms/HeaderBar";

export default function MyCourt({ navigation, router }) {
  return (
    <View>
      <HeaderBar
        text={"Địa điểm của tôi"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />
      <Text>MyCourt</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
