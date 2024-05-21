import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import { SIZE } from "../../theme/fonts";
import FormInput from "../../components/Atoms/FormInput";
import CustomButton from "../../components/Atoms/CustomButton";
import { Checkbox } from "native-base";

const Login = ({ navigation }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [toggleRemember, setToggleRemember] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.loginbg} style={styles.image} />
      </View>
      <Image source={images.applogo} style={styles.logo} />
      <View style={styles.loginContainer}>
        <View style={styles.welcomeText}>
          <Text style={styles.welcome}>Chào mừng!</Text>
          <Text style={styles.welcomeDesc}>Hãy đăng nhập để tiếp tục</Text>
        </View>
        <View style={styles.loginForm}>
          <FormInput
            label="Địa chỉ email"
            placeholder="Nhập email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <View style={styles.inputSpacing}>
            <FormInput
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
          </View>
          <View style={styles.buttonSpacing}>
            <CustomButton
              title={"Đăng nhập"}
              backgroundColor={"#2A9083"}
              height={52}
              width={"100%"}
              color="white"
            />
          </View>
        </View>
        <View style={styles.savingData}>
          <Checkbox value="rememberMe" aria-label="Remember me">
            <Text style={styles.checkboxLabel}>Ghi nhớ mật khẩu</Text>
          </Checkbox>
          <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
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
        <Text style={styles.notHave}>Chưa có tài khoản?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.regNow}>Đăng kí ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
    top: 200,
    width: "100%",
    borderRadius: 30,
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    marginLeft: 8,
  },
  loginForm: {
    marginTop: 30,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
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
