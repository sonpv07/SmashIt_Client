import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../../constants/icons";
import images from "../../../constants/images";
import { SIZE } from "../../../theme/fonts";
import { CheckIcon, Icon, Select } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import VectorIcon from "../../../components/Atoms/VectorIcon";
import { set } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export default function MyProfile() {
  const [accountInfo, setAccountInfo] = useState({
    fullName: "Do dang phuc Anh",
    phoneNumber: "0123456789",
    email: "phucanhdodang1211@gmail.com",
    gender: "Nam",
    googleAccount: "smashit1901@gmail.com",
  });

  const [focus, setFocus] = useState({
    fullName: false,
    phoneNumber: false,
    email: false,
    gender: false,
  });

  const [editMode, setEditMode] = useState(false);

  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const textInputRef = useRef(null);

  const handlePress = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleFocus = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
  };

  const handleChangeText = (field, value) => {
    setAccountInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.greenBg}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.goback_white} style={styles.goback} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.update}>{editMode ? "Lưu" : "Sửa hồ sơ"}</Text>
          </TouchableOpacity>
        </View>
        <Image source={images.avatar2} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.accountInfo}>Thông tin tài khoản</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Họ và Tên</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomColor: focus.fullName ? "#2A9083" : "#E5E5E5",
                  color: editMode ? "#000" : "#888",
                },
              ]}
              placeholder="Hãy nhập họ và tên của bạn"
              value={accountInfo.fullName}
              readOnly={editMode ? false : true}
              onFocus={() => handleFocus("fullName")}
              onBlur={() => handleBlur("fullName")}
              onChangeText={(e) => handleChangeText("fullName", e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomColor: focus.phoneNumber ? "#2A9083" : "#E5E5E5",
                  color: editMode ? "#000" : "#888",
                },
              ]}
              placeholder="Hãy nhập số điện thoại của bạn"
              value={accountInfo.phoneNumber}
              readOnly={editMode ? false : true}
              onFocus={() => handleFocus("phoneNumber")}
              onBlur={() => handleBlur("phoneNumber")}
              onChange={(e) => handleChangeText("phoneNumber", e)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Địa chỉ email</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomColor: focus.email ? "#2A9083" : "#E5E5E5",
                  color: editMode ? "#000" : "#888",
                },
              ]}
              placeholder="Hãy nhập địa chỉ email của bạn"
              value={accountInfo.email}
              readOnly={editMode ? false : true}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              onChange={(e) => handleChangeText("email", e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { marginBottom: editMode && -5 }]}>
              Giới tính
            </Text>
            {editMode ? (
              <Select
                selectedValue={accountInfo.gender}
                minWidth="200"
                height="10"
                accessibilityLabel="Choose Service"
                placeholder="Hãy chọn giới tính của bạn"
                mt={1}
                variant="unstyled"
                onValueChange={(e) =>
                  setAccountInfo({ ...accountInfo, gender: e })
                }
                dropdownIcon={
                  <Icon as={MaterialIcons} name="arrow-drop-down" size={8} />
                }
                style={styles.selectInput}
              >
                <Select.Item label="Nam" value="Nam" />
                <Select.Item label="Nữ" value="Nữ" />
                <Select.Item label="Khác" value="Khác" />
              </Select>
            ) : (
              <TextInput
                style={[
                  styles.input,
                  {
                    borderBottomColor: focus.email ? "#2A9083" : "#E5E5E5",
                    color: editMode ? "#000" : "#888",
                  },
                ]}
                value={accountInfo.gender}
                readOnly
              />
            )}
          </View>
          <Text style={styles.accountLink}>Liên kết tài khoản</Text>
          <View style={styles.accountOption}>
            <View style={styles.left}>
              <Image source={images.google} style={styles.google} />
              <Text style={styles.textLeft}>{accountInfo.googleAccount}</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#2A9083" }}
              thumbColor={"#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={styles.security}>Bảo mật</Text>
          <View style={styles.changePassword}>
            <Text style={styles.changeText}>Thay đổi mật khẩu</Text>
            <VectorIcon.FontAwesome5 name="chevron-right" size={15} />
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.logout}>Đăng xuất</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greenBg: {
    backgroundColor: "#2A9083",
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goback: {
    width: 28,
    height: 28,
  },
  update: {
    fontSize: SIZE.size_16,
    color: "white",
    fontFamily: "quicksand-bold",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 60,
    alignSelf: "center",
    position: "absolute",
    top: 90,
    borderWidth: 3,
    borderColor: "white",
  },
  infoContainer: {
    marginTop: 60,
    paddingHorizontal: 30,
  },
  accountInfo: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-regular",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    // borderBottomColor: "#E5E5E5",
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-medium",
    paddingBottom: 8,
  },
  selectInput: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-medium",
    marginLeft: -10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  accountLink: {
    marginTop: 10,
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
    marginBottom: 10,
  },
  accountOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textLeft: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
  },
  google: {
    width: 16,
    height: 16,
  },
  logout: {
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
    marginTop: 20,
  },
  security: {
    marginTop: 30,
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
  },
  changePassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 30,
  },
  changeText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#E8E8E8",
    marginBottom: 30,
  },
  logout: {
    textAlign: "center",
    fontSize: SIZE.size_16,
    fontFamily: "quicksand-bold",
    marginBottom: 40,
    color: "red",
  },
});
