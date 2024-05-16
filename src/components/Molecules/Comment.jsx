import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { SIZE, WEIGHT } from "../../theme/fonts";
import StarRating from "react-native-star-rating-widget";
import { COLORS } from "../../theme/colors";
import Icon from "react-native-vector-icons/Feather";

export default function Comment({ data }) {
  const [rating, setRating] = useState(5);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/avatar.png")} />
      <View style={styles.rightSection}>
        <View style={styles.infoSection}>
          <View style={styles.nameAndDate}>
            <Text style={styles.boldText}>Nguyễn Văn A</Text>
            <Text style={styles.normalText}>1 ngày trước</Text>
          </View>

          <StarRating
            rating={rating}
            onChange={setRating}
            starSize={14}
            color={COLORS.orangeText}
            starStyle={{
              marginHorizontal: 1,
            }}
          />
        </View>

        <View style={{ paddingRight: 20, marginBottom: 8 }}>
          <Text style={styles.normalText}>
            App tuyệt nhất chưa từng thấy, nó giúp tôi đặt sân nhanh chóng và dễ
            dàng
          </Text>
        </View>

        <View>
          <TouchableWithoutFeedback>
            <View style={styles.answerButton}>
              <Icon name="corner-down-right" color={COLORS.greyText} />
              <Text
                style={[
                  styles.boldText,
                  { fontSize: SIZE.size_12, color: COLORS.greyText },
                ]}
              >
                Trả lời
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },

  image: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  rightSection: {
    flex: 1,
  },

  infoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  nameAndDate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  boldText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
  },

  normalText: {
    fontFamily: "quicksand-regular",
    fontSize: SIZE.size_12,
    lineHeight: 18,
  },

  answerButton: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
