import {
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { COLORS } from "../../../theme/colors";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import Prepresentative from "./Prepresentative";
import CourtLocation from "./CourtLocation";
import CourtInformation from "./CourtInformation";
import CourtService from "./CourtService";
import PaymentMethod from "./PaymentMethod";
import StepDot from "../../../components/Molecules/StepDot";
import { SIZE } from "../../../theme/fonts";
import { AuthContext } from "../../../context/AuthContext";

export default function RegisterCourt({ navigation, route }) {
  const [step, setStep] = useState(1);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const { isLogin, setIsLogin, setFirstRegister, firstRegister } =
    useContext(AuthContext);

  // Form Data Start

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [rePassword, setRePassword] = useState("");

  const [courtAddress, setCourtAddress] = useState("");

  const [courtImage, setCourtImage] = useState("");

  const [courtName, setCourtName] = useState("");

  const [courtOpenTime, setCourtOpenTime] = useState(null);

  const [courtCloseTime, setCourtCloseTime] = useState(null);

  const [courtQuantity, setCourtQuantity] = useState(0);

  const [courtPrice, setCourtPrice] = useState(null);

  const [courtPriceWeekend, setCourtPriceWeekend] = useState(null);

  const [courtPriceHoliday, setCourtPriceHoliday] = useState(null);

  const [courtServiceList, setCourtServiceList] = useState([]);
  // Form Data End

  const handlePress = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      setFirstRegister(false);
      setIsLogin(true);
    }
  };

  const handleGoBack = () => {
    if (step === 1) {
      return navigation.goBack();
    } else {
      return setStep(step - 1);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const getHeaderText = () => {
    switch (step) {
      case 1: {
        return "Thông tin cá nhân";
      }

      case 2: {
        return "Địa điểm sân";
      }

      case 3: {
        return "Thông tin sân";
      }

      case 4: {
        return "Dịch vụ tại sân";
      }

      case 5: {
        return "Thiết lập thanh toán";
      }

      default: {
        return "Thông tin cá nhân";
      }
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBar text={getHeaderText()} goBack={handleGoBack} isGoBack={true} />
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, marginBottom: 100 }}>
            {step === 1 && (
              <Prepresentative
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                password={password}
                setPassword={setPassword}
                rePassword={rePassword}
                setRePassword={setRePassword}
              />
            )}
            {step === 2 && (
              <CourtLocation
                courtAddress={courtAddress}
                setCourtAddress={setCourtAddress}
              />
            )}
            {step === 3 && (
              <CourtInformation
                courtImage={courtImage}
                setCourtImage={setCourtImage}
                courtName={courtName}
                setCourtName={setCourtName}
                courtPrice={courtPrice}
                setCourtPrice={setCourtPrice}
                courtPriceHoliday={courtPriceHoliday}
                setCourtPriceHoliday={setCourtPriceHoliday}
                courtPriceWeekend={courtPriceWeekend}
                setCourtPriceWeekend={setCourtPriceWeekend}
                courtQuantity={courtQuantity}
                setCourtQuantity={setCourtQuantity}
                courtOpenTime={courtOpenTime}
                setCourtOpenTime={setCourtOpenTime}
                courtCloseTime={courtCloseTime}
                setCourtCloseTime={setCourtCloseTime}
              />
            )}
            {step === 4 && (
              <CourtService
                courtServiceList={courtServiceList}
                setCourtServiceList={setCourtServiceList}
              />
            )}
            {step === 5 && <PaymentMethod />}
          </View>

          <View
            style={[
              styles.buttonSection,
              // isKeyboardVisible && { display: "none" },
            ]}
          >
            <StepDot quantity={5} currentStep={step} />
            <Pressable
              style={({ pressed }) => [styles.button]}
              onPress={handlePress}
            >
              <Text style={styles.buttonText}>
                {step < 5 ? "Tiếp tục" : "Hoàn thành"}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  buttonSection: {
    position: "relative",
    bottom: 35,
    gap: 30,
    alignItems: "center",
  },

  button: {
    width: "100%",
    backgroundColor: COLORS.orangeText,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  buttonText: {
    paddingVertical: 16,
    color: "white",
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
  },
});
