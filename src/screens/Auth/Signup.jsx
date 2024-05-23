import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import images from "../../constants/images";
import { SIZE } from "../../theme/fonts";
import FormInput from "../../components/Atoms/FormInput";
import CustomButton from "../../components/Atoms/CustomButton";
import { Checkbox } from "native-base";
import { AuthContext } from "../../context/AuthContext";

const Signup = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });
  const [toggleRemember, setToggleRemember] = useState(false);

  const { isLogin, setIsLogin, setFirstRegister, firstRegister, chosenRole } =
    useContext(AuthContext);

  const handleNavigate = () => {
    setFirstRegister(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.loginbg} style={styles.image} />
      </View>
      {/* <Image source={images.applogo} style={styles.logo} /> */}
      <View style={styles.loginContainer}>
        <View style={styles.welcomeText}>
          <Text>
            <Text style={styles.welcome}>Đăng kí </Text>
            <Text style={styles.welcomeDesc}>
              để khám phá nhiều tiện ích ưu đãi từ hệ sinh thái cầu lông
            </Text>
          </Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.fullName}>
            <FormInput
              label="Họ"
              placeholder="Nhập Họ"
              value={form.firstName}
              handleChangeText={(e) => setForm({ ...form, firstName: e })}
              width={175}
            />
            <FormInput
              label="Tên"
              placeholder="Nhập Tên"
              value={form.lastName}
              handleChangeText={(e) => setForm({ ...form, lastName: e })}
              width={175}
            />
          </View>
          <View style={styles.inputSpacing}>
            <FormInput
              label="Địa chỉ email"
              placeholder="Nhập email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
            />
          </View>
          <View style={styles.inputSpacing}>
            <FormInput
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
          </View>
          <View style={styles.inputSpacing}>
            <FormInput
              label="Xác nhận mật khẩu"
              placeholder="Xác nhận mật khẩu"
              // value={form.password}
              // handleChangeText={(e) => setForm({ ...form, password: e })}
            />
          </View>
          <View style={styles.buttonSpacing}>
            <CustomButton
              title={"Đăng kí"}
              backgroundColor={"#2A9083"}
              height={52}
              width={"100%"}
              color="white"
              handlePress={() => {
                handleNavigate();
              }}
            />
          </View>
        </View>
        <View style={styles.divider}>
          <View style={styles.leftDiv}></View>
          <Text style={styles.otherOption}>hoặc tiếp tục với</Text>
          <View style={styles.rightDiv}></View>
        </View>
        <CustomButton
          title={"Google"}
          backgroundColor={"#F5F5F5"}
          height={52}
          width={"100%"}
          icon={images.google}
        />
      </View>

      <View style={styles.registerLink}>
        <Text style={styles.notHave}>Đã có tài khoản?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.regNow}>Đăng nhập ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
  },
  image: {
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 50,
    width: 98,
    height: 52,
  },
  loginContainer: {
    backgroundColor: "white",
    // borderColor: "red",
    borderWidth: 1,
    top: 50,
    width: "100%",
    borderRadius: 30,
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  welcomeText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
    color: "#2A9083",
  },
  welcomeDesc: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-semibold",
  },
  loginForm: {
    marginTop: 30,
  },
  fullName: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputSpacing: {
    marginTop: 15,
  },
  buttonSpacing: {
    marginTop: 25,
  },
  checkboxLabel: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
  },
  savingData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 28,
  },
  forgotPass: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    color: "#2A9083",
  },
  divider: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
    marginVertical: 30,
  },
  leftDiv: {
    width: 120,
    borderBottomColor: "#878787",
    borderBottomWidth: 1,
  },
  rightDiv: {
    width: 120,
    borderBottomColor: "#878787",
    borderBottomWidth: 1,
  },
  otherOption: {
    textAlign: "center",
    paddingHorizontal: 10,
    fontSize: SIZE.size_12,
    fontFamily: "quicksand-regular",
  },
  registerLink: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  notHave: {
    marginRight: 10,
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-regular",
  },
  regNow: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    color: "#2A9083",
    textDecorationLine: "underline",
  },
});
