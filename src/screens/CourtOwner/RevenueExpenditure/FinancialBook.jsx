import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { COLORS } from "../../../theme/colors";
import HeaderBar from "../../../components/Atoms/HeaderBar";
import { formatNumber } from "../../../utils";
import { SIZE } from "../../../theme/fonts";
import DatePickerSlider from "../../../components/Organisms/DatePicker";
import moment from "moment";
import FinancialActivities from "../../../components/Organisms/FinancialActivities";
import { METRICS } from "../../../theme/metrics";
import TimeFilter from "../../../components/Organisms/TimeFilter";
import Oops from "../../../components/Organisms/Oops";
import { LoadingContext } from "../../../context/LoadingContext";

export default function FinancialBook({ navigation }) {
  const [chosenDate, setChosenDate] = useState(new Date());

  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const financialData = [1];

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

  const [chosenFilter, setChosenFilter] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBar
        text={"Sổ thu chi"}
        isGoBack={true}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TimeFilter
          chosenFilter={chosenFilter}
          setChosenFilter={setChosenFilter}
        />

        <View style={styles.costDetailSection}>
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
                {isLoading ? formatNumber(100000) : formatNumber(0)}đ
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
                {formatNumber(0)}đ
              </Text>
            </View>
            <View style={styles.overviewItem}>
              <Text style={[styles.mediumText, { fontSize: SIZE.size_10 }]}>
                Số dư
              </Text>
              <Text style={[styles.semiboldText, { fontSize: SIZE.size_14 }]}>
                {isLoading ? formatNumber(-100000) : formatNumber(0)}đ
              </Text>
            </View>
          </View>

          {!isLoading ? (
            <View style={{ flex: 1, paddingBottom: 30 }}>
              <Oops text={"Oops, chưa có thống kê !"} />
            </View>
          ) : (
            <FlatList
              style={{
                marginTop: 30,
                flex: 1,
                maxHeight:
                  chosenFilter === 0
                    ? METRICS.screenHeight * 0.35
                    : METRICS.screenHeight * 0.48,
              }}
              data={financialData}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 30 }}
              renderItem={({ item }) => {
                return <FinancialActivities />;
              }}
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={() => navigation.navigate("CreateFinancialActivities")}
      >
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
    paddingHorizontal: 15,
  },

  overviewCost: {
    flexDirection: "row",
    justifyContent: "space-between",
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
