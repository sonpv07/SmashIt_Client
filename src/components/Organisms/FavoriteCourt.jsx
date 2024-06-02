import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SIZE, WEIGHT } from "../../theme/fonts";
import { COLORS } from "../../theme/colors";

const FavoriteCourt = ({
  courtImage,
  courtName,
  courtAddress,
  courtDistance,
  courtPrice,
}) => {
    const [isFavorite, setIsFavorite] = useState(true);
  const isFavoriteColor = isFavorite === true ? "#EE5C37" : "white";
  const isFavoriteName = isFavorite === true ? "heart" : "hearto";

  return (
    <View style={styles.outline}>
      <View style={styles.outlineImage}>
        <Image style={styles.image} source={courtImage} />
      </View>
      <View style={styles.courtInfo}>
        <Text style={styles.courtName}>{courtName}</Text>
        <View style={styles.courtAddress}>
          <Text>{courtAddress}</Text>
        </View>
        <View style={styles.courtDistance_Price}>
          <Text style={styles.courtDistance_Text}>{courtDistance}</Text>
          <View style={styles.hr} />
          <Text style={styles.courtDistance_Text}>{courtPrice}đ</Text>
          <TouchableOpacity onPress={() => {setIsFavorite(!isFavorite)}}>
            <Icon name={isFavoriteName} size={20} color={"#EE5C37"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    aspectRatio: 3,
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: COLORS.white,
    marginBottom: 3,
  },
  outlineImage: {
    // width: '30%',
    height: "100%",
    aspectRatio: 1,
    padding: 10,
    // backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  courtInfo: {
    // backgroundColor: 'pink',
    aspectRatio: 2,
    height: "100%",
    // width: '100%',
    display: "flex",
    // alignItems: 'stretch',
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "center",
  },
  courtName: {
    fontSize: SIZE.size_14,
    fontWeight: WEIGHT.weight_600,
  },
  courtAddress: {
    fontSize: SIZE.size_12,
    fontWeight: WEIGHT.weight_500,
  },
  courtDistance_Price: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  courtDistance_Text: {
    color: COLORS.darkGreenText,
    fontSize: SIZE.size_16,
    fontWeight: WEIGHT.weight_600,
  },
  hr: {
    borderWidth: 1,
    borderColor: COLORS.lightGreyBorder,
    height: "100%",
  },
});

export default FavoriteCourt;
