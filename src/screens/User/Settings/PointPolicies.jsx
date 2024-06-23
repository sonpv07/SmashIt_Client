import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../../constants/icons";
import { useNavigation } from "@react-navigation/native";

const PointPolicies = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        text={"Chính sách tích điểm"}
        isGoBack={true}
        goBack={() => navigate.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Hệ thống điểm thưởng: Sân của Si</Text>

        <View style={styles.policyContainer}>
          <View style={styles.iconSmall}>
            <Image
              source={icons.bad_white}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
          </View>
          <Text style={styles.policyItem}>
            1.1. Người Sử Dụng có thể tích lũy điểm thưởng (Bé Si) khi đặt sân
            trên ứng dụng Smash It thông qua việc sử dụng{" "}
            <Text style={styles.span}>
              hệ thống Chính Sách Đảm Bảo của Smash It
            </Text>
            . Nhìn chung, Bé Si sẽ được ghi nhận vào Sân của Si của Người Sử
            Dụng sau khi hoàn tất một giao dịch thành công hoặc hoàn tất hoạt
            động được Smash It chấp thuận. Bạn có đủ điều kiện tham gia hệ thống
            điểm thưởng Sân của Si nếu bạn là Người Sử Dụng và Tài Khoản của bạn
            không thuộc đối tượng không áp dụng việc tham gia.
          </Text>
        </View>

        <View style={styles.policyContainer}>
          <View style={styles.iconSmall}>
            <Image
              source={icons.bad_white}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
          </View>
          <Text style={styles.policyItem}>
            1.2. Giao dịch chưa hoàn thành trên ứng dụng Smash It khi sử dụng{" "}
            <Text style={styles.span}>Chính Sách Đảm Bảo Smash It</Text> sẽ
            không đủ điều kiện tham gia hệ thống điểm thưởng Sân của Si. Smash
            It có toàn quyền loại trừ các mặt hàng không thuộc đối tượng của hệ
            thống điểm thưởng Sân của Si.
          </Text>
        </View>

        <View style={styles.policyContainer}>
          <View style={styles.iconSmall}>
            <Image
              source={icons.bad_white}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
          </View>
          <Text style={styles.policyItem}>
            1.3. Bé Si không có giá trị tiền tệ, không cấu thành tài sản của
            Người Sử Dụng và{" "}
            <Text style={styles.span}>
              không thể được mua, bán, chuyển nhượng hoặc quy đổi thành tiền
              mặt.
            </Text>
          </Text>
        </View>

        <View style={styles.policyContainer}>
          <View style={styles.iconSmall}>
            <Image
              source={icons.bad_white}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
          </View>
          <Text style={styles.policyItem}>
            1.4. Tùy thuộc vào các quy tắc và quy định được Smash It quyết định,
            thay đổi và chỉnh sửa vào từng thời điểm, tùy thuộc vào hạn mức theo
            toàn quyền quyết định của Smash It, Người Sử Dụng có thể sử dụng Bé
            Si bằng cách gửi yêu cầu đến Smash It và sử dụng Bé Si để khấu trừ
            vào giá khi thực hiện giao dịch thuê sân trên{" "}
            <Text style={styles.span}>Ứng Dụng Smash It</Text> theo quy định của{" "}
            <Text style={styles.span}>Smash It</Text> vào từng thời điểm.
          </Text>
        </View>

        <View style={styles.policyContainer}>
          <View style={styles.iconSmall}>
            <Image
              source={icons.bad_white}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
          </View>
          <Text style={styles.policyItem}>
            1.5. Bé Si mà bạn đã sử dụng sẽ được trừ vào{" "}
            <Text style={styles.span}>điểm thưởng "Sân của Si"</Text>. Mỗi Bé Si
            đều có hạn sử dụng. Lưu ý kiểm tra chi tiết Tài Khoản của bạn trên
            hệ thống tích điểm để biết số dư Bé Si cũng như hạn sử dụng.
          </Text>
        </View>

        <View style={styles.policyContainer}>
          <View style={styles.iconSmall}>
            <Image
              source={icons.bad_white}
              resizeMode="contain"
              style={{ width: 15, height: 15 }}
            />
          </View>
          <Text style={styles.policyItem}>
            1.6. Trong giới hạn quy định pháp luật áp dụng,{" "}
            <Text style={styles.span}>
              Smash It bảo lưu quyền (i) ngưng hệ thống điểm thưởng Sân của Si
              bất cứ lúc nào
            </Text>
            , và (ii) hủy hoặc hoãn quyền tham gia vào hệ thống điểm thưởng Sân
            của Si của Người Sử Dụng, bao gồm cả khả năng có được hoặc sử dụng
            Bé Si.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointPolicies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: "quicksand-bold",
    textAlign: "center",
    marginTop: 15,
  },
  iconSmall: {
    backgroundColor: "#2A9083",
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginRight: 10,
  },
  policyItem: {
    fontSize: 14,
    fontFamily: "quicksand-regular",
    flex: 1,
    flexWrap: "wrap",
  },
  span: {
    fontFamily: "quicksand-bold",
  },
  policyContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    marginTop: 25,
  },
});
