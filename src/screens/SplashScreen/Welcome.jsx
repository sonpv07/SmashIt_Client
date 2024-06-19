import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import CustomButton from "../../components/Atoms/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

import { SIZE } from "../../theme/fonts";
import { COLORS } from "../../theme/colors";

const Welcome = ({ navigation }) => {
  const [isNew, setIsNew] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={images.logo1} style={styles.logo} resizeMode="contain" />
      </View>
      {/* <View style={styles.blobContainer}>
        <Image source={images.blob} style={styles.blob} resizeMode="contain" />
      </View> */}
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Chào mừng bạn đến với Smash It</Text>
        <Text style={styles.welcomeDesc}>Ứng dụng số một cho người</Text>
        <Text style={styles.welcomeDesc}>
          có sở thích về cầu lông và hơn thế nữa
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={"Bắt Đầu"}
          backgroundColor={COLORS.orangeText}
          color={"white"}
          height={60}
          handlePress={() => navigation.navigate("RolePick")}
        />
        {/* <View style={styles.buttonSpacing}>
          <CustomButton
            title={"Đăng kí"}
            borderColor={"#2A9083"}
            height={60}
            handlePress={() => navigation.navigate("RolePick")}
          />
        </View> */}
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    // backgroundColor: "rgba(42, 144, 131, 0.38)",
    backgroundColor: "rgba(255, 138, 0, 0.2)",
    flex: 1,
  },
  logoContainer: {
    marginTop: 20,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 500,
    height: 500,
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
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 19,
    width: "100%",
  },
});
