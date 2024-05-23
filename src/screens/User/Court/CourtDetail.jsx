import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import courtImages from "../../../assets/images/courtImages.jpg";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../../theme/colors";
import { SIZE } from "../../../theme/fonts";
import { METRICS } from "../../../theme/metrics";
import Comment from "../../../components/Organisms/Comment";
import StarRating from "react-native-star-rating-widget";
import ChipList from "../../../components/Molecules/ChipList";
import StepDot from "../../../components/Molecules/StepDot";
import { useNavigation } from "@react-navigation/native";

const CourtDetail = () => {
  const courtImageList = [1, 1, 1, 1];
  const feedback = [1, 1, 1, 1, 1];
  const [favorite, setFavorite] = useState(true);
  const heart = favorite === true ? "heart" : "hearto";
  const [step, setStep] = useState(1);
  const navigator = useNavigation();
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.courtImagesContainer}>
          <View style={{ position: "relative" }}>
            <ScrollView
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={(e) => {
                const x = e.nativeEvent.contentOffset.x;
                setStep(x.toFixed(0));

                // console.log(step);
              }}
              horizontal
              style={styles.courtImages}
            >
              {courtImageList.map((court, index) => {
                return (
                  <View key={index} style={styles.courtImage}>
                    <Image style={styles.image} source={courtImages} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("Home");
            }}
            style={styles.goBack}
          >
            <Icon name="leftcircle" size={30} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.dots}>
            <StepDot currentStep={step} quantity={4} />
          </View>
        </View>
        <View style={styles.courtDetail}>
          <View>
            <Icon />
            <Text style={styles.title}>Sân cầu lông Quân Đội</Text>
          </View>
          <Text style={styles.content}>
            606/16 Nguyễn Xiển, Long Thạnh Mỹ, Thủ Đức, Thành phố Hồ Chí Minh
          </Text>
          <View style={styles.courtMoreDetail}>
            <View style={styles.rating}>
              <StarRating
                rating={4}
                starSize={18}
                starStyle={{
                  marginHorizontal: 1,
                }}
              />
              <Text style={styles.content}>5.0</Text>
            </View>
            <Text style={styles.content}>(100 lượt đặt)</Text>
            <View style={styles.hr} />
            <Text style={styles.content}>Cách bạn 5.6km</Text>
            <TouchableOpacity
              onPress={() => {
                setFavorite(!favorite);
              }}
            >
              <Icon name={heart} size={20} color={"red"} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: "quicksand-medium", color: "#E74B3D" }}>
            <Text style={[styles.title, { color: "#E74B3D" }]}>Đóng cửa. </Text>
            Bạn có thể đặt trước cho lượt chơi sau 05:00
          </Text>
        </View>
        <View style={styles.courtOwner}>
          <Text style={styles.title}>Thông tin chủ sân</Text>
          <View style={styles.courtOwnerInfo}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarImage}
                source={{ uri: "https://avatar.iran.liara.run/public/boy" }}
              />
            </View>
            <View>
              <Text style={{ fontFamily: "quicksand-semibold" }}>
                Nguyễn Văn A (Chủ sân)
              </Text>
              <Text style={styles.content}>098764321</Text>
            </View>
          </View>
        </View>
        <View style={styles.infrastructure}>
          <Text style={styles.title}>Cơ sở vật chất</Text>
          <View style={styles.chip}>
            <ChipList />
          </View>
        </View>
        <View style={styles.rule}>
          <Text style={styles.title}>Quy định sử dụng sân</Text>
          <View>
            <Text style={styles.content}>
              Đặt sân theo giờ cố định và thông báo trước để tránh xung đột về
              thời gian. Tuân theo giờ đã đặt và không sử dụng sân lâu hơn thời
              gian đã định. Mặc trang phục thích hợp và giày thể thao không làm
              hỏng bề mặt sân. Giữ sân sạch sẽ và không làm hỏng hạng mục cầu
              lông hoặc cơ sở vật chất. Người chơi chịu trách nhiệm nếu làm hỏng
              bề mặt sân và phải đền bù theo quy định của sân.
            </Text>
          </View>
        </View>
        <View style={styles.feedback}>
          <Text style={styles.title}>Nhận xét (10)</Text>
          {feedback.map((comment, index) => {
            return (
              <View key={index} style={{ gap: 15 }}>
                <Comment />
                <View style={styles.hr} />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    display: "flex",
    flexDirection: "column",
  },
  courtImagesContainer: {
    width: "100%",
    aspectRatio: 1.6,
  },
  courtImages: {
    display: "flex",
    flexDirection: "row",
  },
  courtImage: {
    display: "flex",
    aspectRatio: 1.6,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  goBack: {
    position: "absolute",
    top: 15,
    left: 15,
    elevation: 10,
  },
  dots: {
    position: "absolute",
    width: "100%",
    display: "flex",
    bottom: 10,
    alignItems: "center",
  },

  courtDetail: {
    width: "100%",
    aspectRatio: 2.5,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingBottom: 14,
    marginBottom: 5,
  },
  courtMoreDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {
    borderWidth: 1,
    borderColor: COLORS.darkGreyBorder,
    // height: "100%",
    // marginHorizontal
  },
  title: {
    fontFamily: "quicksand-bold",
    fontSize: SIZE.size_16,
  },
  content: {
    fontFamily: "quicksand-medium",
  },

  courtOwner: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 5,
    width: "100%",
    aspectRatio: 4,
  },
  courtOwnerInfo: {
    height: "80%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  avatar: {
    height: "100%",
    aspectRatio: 1,
  },
  avatarImage: {
    height: "100%",
    width: "100%",
  },
  infrastructure: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 5,
    gap: 10,
  },
  rule: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 5,
  },
  feedback: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
  },
  comment: {
    marginBottom: 10,
  },
  bottomTab: {
    
  }
});

export default CourtDetail;
