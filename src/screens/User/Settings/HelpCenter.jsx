import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE } from "../../../theme/fonts";
import icons from "../../../constants/icons";
import { TextField } from "native-base";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import VectorIcon from "../../../components/Atoms/VectorIcon";

const faqList = [
  {
    title: "Làm thế nào tôi liên hệ dịch vụ Chăm sóc Khách hàng (CSKH)?",
    ans: "Cách 1: Liên hệ với đội ngũ Admin thông qua hotline: 0123456789 (Ms. Nghi) \nCách 2: Vào App -> Mục Tài khoản -> Chọn Chia sẻ phản hồi để có thể trao đổi với đội ngũ admin nhanh nhất có thể.\n*Lưu ý: Thời gian hoạt động từ 7h-22h tất cả các ngày trong tuần.\nCách 3: Mọi vấn đề/ ý kiến đóng góp xin vui lòng gửi về địa chỉ email: smashit.forwork@gmail.com",
  },
  {
    title:
      "Tôi khắc phục sự cố về đăng nhập và thay đổi mật khẩu như thế nào? ",
  },
];

const HelpCenter = () => {
  const navigate = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        text={"Trung tâm trợ giúp"}
        isGoBack={true}
        goBack={() => navigate.goBack()}
      />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={[styles.faqContainer, { marginTop: 25 }]}>
          <View style={[styles.header]}>
            <VectorIcon.AntDesign name="book" color={"#F37148"} size={24} />
            <Text style={styles.fTitle}>
              Làm thế nào tôi liên hệ dịch vụ Chăm{"\n"}sóc Khách hàng (CSKH)?
            </Text>
          </View>
          <View style={styles.fAnswer}>
            <Text style={styles.step}>
              - Cách 1: Liên hệ với đội ngũ Admin thông qua hotline:{" "}
              <Text style={styles.span}>0123456789 (Ms. Nghi)</Text>
            </Text>

            <Text style={styles.step}>
              - Cách 2: Vào <Text style={styles.span}>App</Text> -{">"} Mục{" "}
              <Text style={styles.span}>Tài khoản</Text> -{">"} Chọn{" "}
              <Text style={styles.span}>Chia sẻ phản hồi</Text> để có thể trao
              đổi với đội ngũ admin nhanh nhất có thể.
            </Text>
            <Text style={styles.step}>
              *Lưu ý: Thời gian hoạt động từ 7h-22h tất cả các ngày trong tuần.
            </Text>
            <Text style={styles.step}>
              - Cách 3: Mọi vấn đề/ ý kiến đóng góp xin vui lòng gửi về địa chỉ
              email: <Text style={styles.span}>smashit.forwork@gmail.com</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.faqContainer, { marginTop: 30 }]}>
          <View style={[styles.header]}>
            <VectorIcon.AntDesign name="book" color={"#F37148"} size={24} />
            <Text style={styles.fTitle}>
              Tôi khắc phục sự cố về đăng nhập và {"\n"}thay đổi mật khẩu như
              thế nào?
            </Text>
          </View>
          <View style={styles.fAnswer}>
            <Text style={[styles.step, { fontFamily: "quicksand-bold" }]}>
              *Nếu bạn đang gặp sự cố đăng nhập:
            </Text>
            <Text style={styles.step}>
              - Cách 1: Liên hệ với bộ phận kĩ thuật để được tư vấn và hỗ trợ
            </Text>
            <Text style={styles.step}>
              Thông tin liên hệ: hotline 0234567890 (Mr. Nguyên)
            </Text>
            <Text style={styles.step}>
              - Cách 2: Vào <Text style={styles.span}>App</Text> -{">"} Mục{" "}
              <Text style={styles.span}>Tài khoản</Text> -{">"} Chọn{" "}
              <Text style={styles.span}>Chia sẻ phản hồi</Text> để có thể trao
              đổi với đội ngũ admin nhanh nhất có thể.
            </Text>
            <Text style={styles.step}>
              *Lưu ý: Thời gian hoạt động từ 7h-22h tất cả các ngày trong tuần.
            </Text>
            <Text style={[styles.step, { fontFamily: "quicksand-bold" }]}>
              *Các bước thay đổi mật hẩu cho tài khoảnx
            </Text>
            <Text style={styles.step}>
              - Cách 1: Vào <Text style={styles.span}>App</Text> -{">"} Chọn{" "}
              <Text style={styles.span}>Quên mật khẩu</Text> -{">"} Đợi hệ thống
              gửi <Text style={styles.span}>mã code (bao gồm 4 kí tự)</Text> vào
              email/SĐT đã đăng kí -{">"} Nhập mã code vào màn hình hiển thị -
              {">"} Nhấn <Text style={styles.span}>OK</Text> -{">"} Đăng nhập
              lại bằng <Text style={styles.span}>Mật khẩu mới</Text> đã thay
              đổi.
            </Text>
            <Text style={styles.step}>
              - Cách 2: Liên hệ với bộ phận kĩ thuật để được tư vấn và hỗ trợ
              thay đổi mật khẩu.
            </Text>
            <Text style={styles.step}>
              Thông tin liên hệ: hotline 0234567890 (Mr. Nguyên)
            </Text>
            <Text style={styles.step}>
              - Cách 3: Mọi vấn đề/ ý kiến đóng góp xin vui lòng gửi về địa chỉ
              email: <Text style={styles.span}>smashit.forwork@gmail.com</Text>
            </Text>
          </View>
        </View>
        <View
          style={[styles.faqContainer, { marginTop: 30, marginBottom: 25 }]}
        >
          <View style={[styles.header]}>
            <VectorIcon.AntDesign name="book" color={"#F37148"} size={24} />
            <Text style={styles.fTitle}>Quy trình đặt sân cầu lông</Text>
          </View>
          <View style={styles.fAnswer}>
            <Text style={styles.step}>
              Đối với người chơi, quy trình đặt sân bao gồm các bước sau:
            </Text>
            <Text style={styles.step}>
              - Bước 1: Vào App Smash It, đăng nhập vào hệ thống trang chủ
            </Text>
            <Text style={styles.step}>
              - Bước 2: Chọn <Text style={styles.span}>Đặt sân</Text> trên thanh
              menu, sau đó hiển thị các thông tin sân cầu lông (gợi ý: để tìm
              kiếm nhanh chóng, vào phần <Text></Text> và chọn vị trị bạn mong
              muốn)
            </Text>

            <Text style={styles.step}>
              - Bước 3: Chọn sân cầu lông phù hợp -{">"} Ứng dụng sẽ hiển thị
              các thông tin chi tiết -{">"} Chọn mục {"\n"}
              <Text style={styles.span}>Đặt sân</Text>
            </Text>
            <Text style={styles.step}>
              - Bước 4: Thực hiện các bước{" "}
              <Text style={styles.span}>Thanh toán</Text> theo hướng dẫn trên
              Ứng dụng
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  faqContainer: {
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  fTitle: {
    fontSize: 16,
    fontFamily: "quicksand-semibold",
    marginBottom: 3,
    backgroundColor: "#FFFFAD",
  },
  step: {
    fontSize: 14,
    fontFamily: "quicksand-medium",
    lineHeight: 20,
    marginTop: 9,
  },
  span: {
    fontFamily: "quicksand-bold",
  },
});
