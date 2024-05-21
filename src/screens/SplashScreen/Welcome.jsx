import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import CustomButton from "../../components/Atoms/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

import { SIZE } from "../../theme/fonts";

const Welcome = ({}) => {
  const [isNew, setIsNew] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={images.applogo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.blobContainer}>
        <Image source={images.blob} style={styles.blob} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Chào mừng bạn đến với SmashIt</Text>
        <Text style={styles.welcomeDesc}>Ứng dụng số một cho người</Text>
        <Text style={styles.welcomeDesc}>
          có sở thích về cầu lông và hơn thế nữa
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={"Đăng nhập"}
          backgroundColor={"#2A9083"}
          color={"white"}
          height={60}
        />
        <View style={styles.buttonSpacing}>
          <CustomButton title={"Đăng kí"} borderColor={"#2A9083"} height={60} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  logoContainer: {
    marginTop: 20,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },
  blobContainer: {
    marginTop: 32,
    alignItems: "center",
    height: 300,
  },
  blob: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 19,
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: SIZE.size_20,
    fontFamily: "quicksand-bold",
    marginBottom: 10,
  },
  welcomeDesc: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-medium",
    color: "#666666",
  },
  buttonSpacing: {
    marginTop: 20,
  },
  buttonContainer: {
    // alignItems: "center",
    paddingHorizontal: 19,
  },
});
