import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import splash1 from "../../assets/images/splash1.png";
import splash2 from "../../assets/images/splash2.png";
import splash3 from "../../assets/images/splash3.png";
import { COLORS } from "../../theme/colors";
import { METRICS } from "../../theme/metrics";
import { SIZE } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

const SplashScreen_User = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigation();
  const [isChosen, setIsChosen] = useState({
    image: splash1,
    title: "Đặt sân nhanh chóng, tiện lợi",
    content:
      "Lo lắng hết sân, sân đặt bị trùng, thay đổi lịch phức tạp? Để đó chúng tôi lo!",
  });

  const steps = (step) => {
    switch (step) {
      case 0:
        return {
          image: splash1,
          title: "Đặt sân nhanh chóng, tiện lợi",
          content:
            "Lo lắng hết sân, sân đặt bị trùng, thay đổi lịch phức tạp? Để đó chúng tôi lo!",
        };
      case 1:
        return {
          image: splash2,
          title: "Hàng ngàn voucher giảm giá hấp dẫn",
          content:
            "Hàng ngàn ưu đãi khi thuê sân và voucher giảm giá cho các dịch vụ tại sân đang chờ bạn",
        };
      case 2:
        return {
          image: splash3,
          title: "Kết nối cộng đồng cầu lông",
          content:
            "Kết bạn và giao đấu với những người cùng chung đam mê thể thao",
        };
      default:
        navigation.navigate("Home");
        break;
    }
  };

  const handlePress = (step) => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigation.navigate("Home");
    }
  };
  return (
    <View style={styles.outline}>
      <View style={styles.imageOutline}>
        <Image style={styles.image} source={steps(step).image} />
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
        <Text style={[{ color: COLORS.white, fontSize: SIZE.size_16 }]}>
          Tiếp tục
        </Text>
        <Icon name="chevron-right" size={15} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    paddingHorizontal: 15,
    display: "flex",
    alignItems: "center",
    gap: 20,
    backgroundColor:'white'
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
    fontSize: 34,
  },
  content: {
    fontFamily: "quicksand-semibold",
    textAlign: "center",
    fontSize: SIZE.size_14,
  },
  btn: {
    width: "80%",
    aspectRatio: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 10,
    gap: 10,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.darkGreenText,
  },
});

export default SplashScreen_User;
