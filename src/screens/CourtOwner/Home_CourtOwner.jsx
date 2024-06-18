import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundHomeImage from "../../assets/images/HomeHeaderCourtOwner.png";
import Icon from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import Title_MoreInfo from "../../components/Atoms/Title_MoreInfo";
import { COLORS } from "../../theme/colors";
import { SIZE } from "../../theme/fonts";
import CourtBackground from "../../components/Organisms/CourtBackground";
import InputIcon from "../../components/Atoms/InputIcon";
import PackageItem from "../../components/Organisms/PackageItem";
import OfferCard from "../../components/Organisms/OfferCard";
import images from "../../constants/images";
import VectorIcon from "../../components/Atoms/VectorIcon";
import Carousel from "react-native-snap-carousel";
import { METRICS } from "../../theme/metrics";
import OwnedCourtCard from "../../components/Organisms/OwnedCourtCard";

export default function Home_CourtOwner() {
  const fullName = "Nguyệt Ánh";
  const courtName = "Sân Bình Trưng Tây";
  const courtAddress =
    "41 Đường 41, Phường Bình Trưng Tây, Quận 2, Thành phố Hồ Chí Minh";
  const courtList = [
    {
      id: 1,
      isActive: true,
      revenue: 12000000,
      bookedSlot: 12,
      totalSlot: 20,
    },
    {
      id: 2,
      isActive: false,
      revenue: 4000000,
      bookedSlot: 12,
      totalSlot: 20,
    },
    {
      id: 3,
      isActive: true,
      revenue: 17112003,
      bookedSlot: 12,
      totalSlot: 25,
    },
  ];
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Search");
  };

  const sliderWidth = METRICS.screenWidth;
  const itemWidth = METRICS.screenWidth * 0.85;

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageOutline}>
          <Image style={styles.image} source={backgroundHomeImage} />
          <View style={styles.overlay}></View>
        </View>
        <View style={[styles.header]}>
          <View style={styles.location}>
            <Icon
              name="location-arrow"
              size={14}
              color={COLORS.white}
              style={{ marginTop: 5 }}
            />
            <View>
              <Text style={[styles.header_Text, { fontSize: SIZE.size_14 }]}>
                {courtName}
              </Text>
              <Text
                style={[styles.header_Text, { fontFamily: "quicksand-medium" }]}
              >
                {courtAddress}
              </Text>
            </View>
          </View>

          <View style={{ gap: 10 }}>
            <Text style={[styles.header_Text, { fontSize: SIZE.size_20 }]}>
              Ngày mới tốt lành! {fullName}
            </Text>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: COLORS.orangeText,
                  borderRadius: 5,
                }}
              ></View>

              <Text
                style={[
                  styles.header_Text,
                  { fontFamily: "quicksand-semibold" },
                ]}
              >
                Bạn có 2 lượt đặt sân mới
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.contentSection}>
        <View>
          <Title_MoreInfo title={"Quản lý chi tiêu"} />
          <TouchableOpacity
            style={styles.financial}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("FinancialBook")}
          >
            <Image source={images.financial} />
            <View>
              <Text style={[styles.semiboldText]}>Chi tiêu của bạn</Text>
              <Text style={styles.regularText}>
                Theo dõi và thống kê chi tiêu của bạn
              </Text>
            </View>
            <View
              style={{ position: "absolute", right: 20, alignSelf: "center" }}
            >
              <VectorIcon.AntDesign name="right" size={14} />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Title_MoreInfo title={"Sân của tôi"} navigation={"AB"} />

          <Carousel
            layout="default"
            firstItem={0}
            contentContainerCustomStyle={{
              paddingLeft: 0, // Ensure the first item starts at the left of the screen
            }}
            data={courtList}
            renderItem={({ item }) => {
              return (
                <OwnedCourtCard
                  isActive={item.isActive}
                  revenue={item.revenue}
                  bookedSlot={item.bookedSlot}
                  totalSlot={item.totalSlot}
                  courtCode={item.id}
                  navigation={navigation}
                />
              );
            }}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>

        <View style={styles.suggest}>
          <Title_MoreInfo title={"Ưu đãi hấp dẫn"} navigation={"AB"} />
          <OfferCard
            name={
              "Nhận ngay ưu đãi đặc biệt khi đăng kí gói SmashHit Unlimited"
            }
          />
        </View>
        <View style={styles.suggest}>
          <Title_MoreInfo
            title={"Gói đăng kí không thể bỏ lỡ"}
            navigation={"AB"}
          />
          <OfferCard
            name={
              "Nhận ngay ưu đãi đặc biệt khi đăng kí gói SmashHit Unlimited"
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  contentSection: {
    flex: 1,
    marginTop: 36,
    gap: 35,
    paddingHorizontal: 12,
  },

  financial: {
    padding: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    flexDirection: "row",
    gap: 10,
  },

  header: {
    position: "absolute",
    top: "10%",
    padding: 12,
    display: "flex",
    justifyContent: "space-between",
    gap: 25,
  },
  imageOutline: {
    width: "100%",
    aspectRatio: 1.7,
    objectFit: "cover",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  header_Text: {
    color: COLORS.white,
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-bold",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "90%",
  },
  text: {
    color: COLORS.black,
    fontSize: 18,
  },
  searchInput: {
    elevation: 10,
    shadowColor: "#000",
  },
  title: {
    fontFamily: "quicksand-bold",
    fontSize: SIZE.size_16,
  },
  discount: {
    marginTop: 10,
    paddingHorizontal: 12,
    marginBottom: 35,
  },
  carousel: {
    marginBottom: 35,
  },

  suggest: {},

  suggestCourts: {
    gap: 20,
    marginTop: 10,
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.28)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },

  semiboldText: {
    fontFamily: "quicksand-semibold",
    fontSize: SIZE.size_14,
  },

  regularText: {
    fontFamily: "quicksand-regular",
    fontSize: SIZE.size_12,
  },
});
