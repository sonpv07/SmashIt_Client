import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../theme/colors";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import { formatNumber } from "../../../utils";
import { SIZE } from "../../../theme/fonts";
import DatePickerSlider from "../../../components/Organisms/DatePicker";
import moment from "moment";
import FinancialActivities from "../../../components/Organisms/FinancialActivities";
import { METRICS } from "../../../theme/metrics";

export default function FinancialBook({ navigation }) {
  const [chosenDate, setChosenDate] = useState(new Date());

  const financialData = [1, 1, 1, 1, 1, 1, 1];

  moment.updateLocale("en", {
    monthsShort: [
      "Th1",
      "Th2",
      "Th3",
      "Th4",
      "Th5",
      "Th6",
      "Th7",
      "Th8",
      "Th9",
      "Th10",
      "Th11",
      "Th12",
    ],
    weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  });

  // Format the date
  const formattedDate = moment(chosenDate).format("ddd, DD MMM YYYY");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBar
        text={"Sổ thu chi"}
        type={"dateTime"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.overviewCost}>
          <View style={styles.overviewItem}>
            <Text style={[styles.mediumText, { fontSize: SIZE.size_10 }]}>
              Chi phí
            </Text>
            <Text
              style={[
                styles.semiboldText,
                { fontSize: SIZE.size_14, color: "#FF0854" },
              ]}
            >
              {formatNumber(100000)} đ
            </Text>
          </View>
          <View style={styles.overviewItem}>
            <Text style={[styles.mediumText, { fontSize: SIZE.size_10 }]}>
              Thu nhập
            </Text>
            <Text
              style={[
                styles.semiboldText,
                { fontSize: SIZE.size_14, color: COLORS.darkGreenText },
              ]}
            >
              {formatNumber(100000)}đ
            </Text>
          </View>
          <View style={styles.overviewItem}>
            <Text style={[styles.mediumText, { fontSize: SIZE.size_10 }]}>
              Số dư
            </Text>
            <Text style={[styles.semiboldText, { fontSize: SIZE.size_14 }]}>
              {formatNumber(100000)}đ
            </Text>
          </View>
        </View>

        <DatePickerSlider
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
        />

        <View style={styles.costDetailSection}>
          <View style={styles.topSection}>
            <Text style={[styles.semiboldText, { fontSize: SIZE.size_12 }]}>
              {formattedDate}
            </Text>

            <View>
              <Text style={[styles.mediumText, { fontSize: SIZE.size_12 }]}>
                Chi phí phát sinh
              </Text>
              <Text
                style={[
                  styles.semiboldText,
                  { fontSize: SIZE.size_12, color: "#FF0854" },
                ]}
              >
                {formatNumber(100000)}đ
              </Text>
            </View>

            <View>
              <Text style={[styles.mediumText, { fontSize: SIZE.size_12 }]}>
                Thu nhập cá nhân
              </Text>
              <Text
                style={[
                  styles.semiboldText,
                  { fontSize: SIZE.size_12, color: COLORS.darkGreenText },
                ]}
              >
                {formatNumber(100000)}đ
              </Text>
            </View>
          </View>

          <FlatList
            style={{ marginTop: 30, flex: 1 }}
            data={financialData}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 30 }}
            renderItem={({ item }) => {
              return <FinancialActivities />;
            }}
          />
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text
          style={[
            styles.semiboldText,
            { fontSize: SIZE.size_16, color: COLORS.white },
          ]}
        >
          Thêm mục mới
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },

  overviewCost: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 25,
  },

  overviewItem: {
    alignItems: "center",
  },

  mediumText: {
    fontFamily: "quicksand-medium",
  },

  semiboldText: {
    fontFamily: "quicksand-semibold",
  },

  costDetailSection: {
    marginTop: 30,
    paddingHorizontal: 15,
    flex: 1,
    maxHeight: METRICS.screenHeight * 0.58,
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.orangeText,
    borderRadius: 8,
    padding: 10,
    position: "absolute",
    bottom: 20,
  },
});
