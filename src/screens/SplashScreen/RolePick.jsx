import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import images from "../../constants/images";
import CustomButton from "../../components/Atoms/CustomButton";
import { AuthContext } from "../../context/AuthContext";

const roleList = [
  {
    desc: "Người chơi cầu lông",
    key: "player",
  },
  {
    desc: "Chủ sân cầu lông",
    key: "courtOwner",
  },
];

const RolePick = ({ navigation }) => {
  // const [chosenRole, setChosenRole] = useState("");

  const { chosenRole, setChosenRole } = useContext(AuthContext);

  const handleChooseRole = (role) => {
    console.log(role);
    setChosenRole(role);
  };

  const handleNavigate = () => {
    if (!chosenRole) {
      return;
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <Image source={images.rolebg} style={styles.rolebg} />
      </View>
      <View style={styles.roleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.semibold}>
            Để chúng tôi hiểu nhu cầu của bạn hơn
          </Text>
          <Text style={styles.regular}>
            Hãy chọn tư cách tham gia. Bạn là...
          </Text>
        </View>
        <View style={styles.roleSelectContainer}>
          {roleList.map((item, index) => (
            <CustomButton
              title={item.desc}
              key={index}
              handlePress={() => handleChooseRole(item.key)}
              backgroundColor={
                chosenRole === item.key ? "rgba(255,138,0,0.1)" : "white"
              }
              borderColor={chosenRole === item.key ? "#FF8A00" : "#D1D1D1"}
              color={chosenRole === item.key ? "#FF8A00" : "#000"}
              fontFamily={
                chosenRole === item.key
                  ? "quicksand-semibold"
                  : "quicksand-regular"
              }
              height={52}
              width={350}
            />
          ))}
        </View>
        <View style={styles.roleButton}>
          <CustomButton
            title={"Bắt đầu"}
            backgroundColor={chosenRole ? "#2A9083" : "rgba(42,144,131,0.2)"}
            color={"white"}
            width={360}
            height={52}
            handlePress={() => handleNavigate()}
          />
        </View>
      </View>
    </View>
  );
};

export default RolePick;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  bgContainer: {
    width: "100%",
    height: 535,
  },
  rolebg: {
    width: "100%",
    height: "100%",
  },
  roleContainer: {
    position: "absolute",
    backgroundColor: "white",
    top: 410,
    width: "100%",
    alignItems: "center",
    borderRadius: 30,
    height: "100%",
    paddingTop: 30,
  },
  textContainer: {
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  semibold: {
    fontSize: 16,
    fontFamily: "quicksand-semibold",
  },
  regular: {
    fontSize: 14,
    fontFamily: "quicksand-regular",
    marginTop: 5,
  },
  roleSelectContainer: {
    alignItems: "center",
    gap: 15,
  },
  roleButton: {
    marginTop: 30,
  },
});
