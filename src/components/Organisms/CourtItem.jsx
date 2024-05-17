import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SIZE, WEIGHT } from "../../theme/fonts";
import { COLORS } from "../../theme/colors";

const CourtItem = () => {
  return (
    <View style={styles.outline}>
      <View style={styles.courtImage}>
        <View>
          <Image style={styles.courtImage} source={{ uri: 'https://klgccwebsecurestoreprd01.blob.core.windows.net/klgccweb-prod/node/club-facility/images/2021-08/Badminton%20Court.jpg' }}/>
        </View>
        <Text></Text>
      </View>
      <View style={styles.courtInfo}>
        <View style={styles.courtTitle}>
          <View>
            <Text style={styles.courtName}>Sân cầu lông Quân Đội</Text>
          </View>
          <View>
            <Text style={styles.courtName}>
              <Icon name="star" size={20} color={COLORS.orangeText} /> 4.9
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.courtAddress}>
            41 Đường 41, Phường Bình Trưng Tây, Quận 2, Thành phố Hồ Chí Minh
          </Text>
        </View>
        <View style={styles.courtDetails}>
          <Text style={styles.courtDetails_Text}>6.0 km</Text>
          <View style={styles.hr} />
          <Text style={styles.courtDetails_Text}>10 sân</Text>
          <View style={styles.hr} />
          <Text style={styles.courtDetails_Text}>89.000đ/giờ</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: "100%",
    aspectRatio: 3 / 1.1,
    display: "flex",
    flexDirection: "row",
  },
  courtImage: {
    height: "100%",
    aspectRatio: 1,
    backgroundColor: "cyan",
    borderRadius: 10,
  },
  courtInfo: {
    width: "63%",
    height: "100%",
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  courtTitle: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  courtName: {
    display: "flex",
    fontSize: SIZE.size_14,
    fontWeight: WEIGHT.weight_600,
  },
  courtAddress: {
    fontSize: SIZE.size_12,
  },
  courtDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  courtDetails_Text: {
    color: COLORS.darkGreenText,
    fontSize: SIZE.size_16,
    fontWeight: WEIGHT.weight_600,
  },
  hr: {
    borderWidth: 1,
    height: "100%",
    width: 1,
    borderColor: COLORS.greyBackground
  },
});

export default CourtItem;
