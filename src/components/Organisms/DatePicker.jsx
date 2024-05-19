import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  formatDate,
  subDays,
} from "date-fns";
import React from "react";
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SIZE, WEIGHT } from "../../theme/fonts";
import { COLORS } from "../../theme/colors";
const { width, height } = Dimensions.get("window");

export default function DatePickerSlider({ action }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const formatDayOfWeek = (dayOfWeek) => {
    switch (dayOfWeek) {
      case "Mon":
        return "Thứ 2";
      case "Tue":
        return "Thứ 3";
      case "Wed":
        return "Thứ 4";
      case "Thu":
        return "Thứ 5";
      case "Fri":
        return "Thứ 6";
      case "Sat":
        return "Thứ 7";
      case "Sun":
        return "C.Nhật";
      default:
        return "";
    }
  };

  const dates = eachWeekOfInterval(
    {
      start: subDays(new Date(), 0),
      end: addDays(new Date(), 30),
    },
    {
      weekStartsOn: 1,
    }
  ).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
      start: cur,
      end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
  }, []);

  function getIndex(index) {
    setCurrentIndex(index);
  }

  let x = 0;
  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ width: width }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          {item.map((day, j) => {
            const txt = formatDayOfWeek(format(day, "E"));

            return (
              <TouchableOpacity
                key={format(day, "d")}
                onPress={() => {
                  getIndex(format(day, "d"));
                  action(day.toISOString());
                }}
                style={{
                  width: 42,
                  height: 75,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: currentIndex === format(day, "d") ? COLORS.darkGreenText : COLORS.greyBackground,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{height: 22.5, alignContent: 'center', justifyContent: 'center'}}>
                  <Text style={{ fontSize: SIZE.size_10, fontWeight: WEIGHT.weight_500 }}>{txt}</Text>
                </View>
                <View 
                  style={{
                    // display: "flex",
                    // flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: currentIndex === format(day, "d") ? COLORS.darkGreenText : COLORS.white,     
                    width: 42, 
                    height: 52.5,
                    borderBottomRightRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}>
                  <Text 
                    style={{ 
                      fontSize: SIZE.size_14, 
                      fontWeight: WEIGHT.weight_600,
                      alignItems: "baseline",
                      // backgroundColor: 'pink',
                      justifyContent: 'center',
                      color: currentIndex === format(day, "d") ? COLORS.white : COLORS.black,
                    }}>{format(day, "d")}</Text>
                  <Text 
                    style={{ 
                      fontSize: SIZE.size_10, 
                      fontWeight: WEIGHT.weight_500,
                      color: currentIndex === format(day, "d") ? COLORS.white : COLORS.black
                    }}>Th{format(item[0], "M")}</Text>
                </View>
                
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={dates}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
