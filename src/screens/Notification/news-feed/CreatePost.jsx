import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { TextField } from "native-base";
import icons from "../../../constants/icons";
import CustomButton from "../../../components/Atoms/CustomButton";
import { SIZE } from "../../../theme/fonts";

const CreatePost = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stack}>
        <View style={styles.title}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image source={icons.goback} style={styles.goback} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Bài viết mới</Text>
        </View>
        <CustomButton
          title={"Đăng bài"}
          backgroundColor={"#2A9083"}
          px={28}
          py={10}
          color={"white"}
          fontFamily={"quicksand-bold"}
          handlePress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.postContainer}></View>
    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  stack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  titleText: {
    fontSize: SIZE.size_20,
    fontFamily: "quicksand-bold",
  },
  goback: {
    width: 28,
    height: 28,
  },
});
