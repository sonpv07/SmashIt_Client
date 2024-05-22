import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import splash1 from "../../assets/images/splashImg1.png";
import splash2 from "../../assets/images/splashImg2.png";
import splash3 from "../../assets/images/splashImg3.png";
import { COLORS } from "../../theme/colors";
import { METRICS } from "../../theme/metrics";
import { SIZE } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

const SplashScreen_User = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigation();

  const steps = (step) => {
    switch (step) {
      case 1:
        return {
          images: splash1,
          title: "Đặt sân nhanh chóng, tiện lợi",
          content:
            "Lo lắng hết sân, sân đặt bị trùng, thay đổi lịch phức tạp? Để đó chúng tôi lo!",
        };
      case 2:
        return {
          images: splash2,
          title: "Hàng ngàn voucher giảm giá hấp dẫn",
          content:
            "Hàng ngàn ưu đãi khi thuê sân và voucher giảm giá cho các dịch vụ tại sân đang chờ bạn",
        };
      case 3:
        return {
          images: splash3,
          title: "Kết nối cộng đồng cầu lông",
          content:
            "Kết bạn và giao đấu với những người cùng chung đam mê thể thao",
        };
      default:
        navigation.navigate("BottomTab");
        break;
    }
  };

  const handlePress = (step) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigation.navigate("BottomTab");
    }
  };

  return (
    <View style={styles.outline}>
      <View style={styles.imageOutline}>
        <Image style={styles.image} source={steps(step).images} />
      </View>
      <View
        style={{
          height: 20,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={[0, 1, 2]}
          style={{ height: "100%" }}
          renderItem={(item, index) => {
            <View
              style={{
                backgroundColor:
                  step === index ? COLORS.darkGreenText : COLORS.greyText,
                width: step === index ? 14 : 10,
                height: step === index ? 14 : 10,
                borderRadius: step === index ? 7 : 5,
              }}
            />;
          }}
        />
      </View>
      <View style={{ gap: 20 }}>
        <Text style={styles.title}>{steps(step).title}</Text>
        <Text style={styles.content}>{steps(step).content}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          handlePress(step);
        }}
      >
        <LinearGradient
          colors={["#FF8A00", "#E0BC3C"]}
          start={{ x: 0.01, y: 0.01 }}
          end={{ x: 1, y: 0.965 }}
          style={styles.gradient}
        >
          <Text
            style={[
              {
                color: COLORS.white,
                fontSize: SIZE.size_18,
                fontFamily: "quicksand-bold",
              },
            ]}
          >
            Tiếp tục
          </Text>
          <Icon
            name="chevron-right"
            size={15}
            color={"white"}
            style={{ position: "absolute", right: 10 }}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    display: "flex",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
  },
  imageOutline: {
    width: "100%",
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontFamily: "quicksand-bold",
    textAlign: "center",
    fontSize: 32,
    paddingHorizontal: 15,
    letterSpacing: -0.3,
  },
  content: {
    fontFamily: "quicksand-medium",
    textAlign: "center",
    fontSize: SIZE.size_14,
    paddingHorizontal: 35,
    lineHeight: 21,
  },
  btn: {
    width: "80%",
    aspectRatio: 5.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 10,
    gap: 10,
    overflow: "hidden",
  },

  gradient: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.darkGreenText,
  },
});

export default SplashScreen_User;
