import React from "react";
import Chip from "../Atoms/Chip";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

const ChipList = ({
  dataList,
  backgroundColor,
  borderColor,
  textColor,
  textFamily,
  action,
  chipType,
  isHorizontal,
  chosenData,
  setChosenData,
  fontSize,
}) => {
  // const data = [
  //   "Long Thạnh Mỹ",
  //   "Long Phước",
  //   "Linh Đông",
  //   "An Khánh",
  //   "Bình Trưng Đông",
  //   "Tăng Nhơn Phú B",
  // ];
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={isHorizontal}
      contentContainerStyle={
        !isHorizontal
          ? {
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 5,
              rowGap: 10,
            }
          : {
              gap: 10,
            }
      }
    >
      {dataList.map((item, index) => (
        <View key={index}>
          <Chip
            borderColor={borderColor}
            text={item}
            backgroundColor={backgroundColor}
            textFamily={textFamily}
            textColor={textColor}
            action={action}
            chipType={chipType}
            chosenData={chosenData}
            setChosenData={setChosenData}
            fontSize={fontSize}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chipList: {
    display: "flex",
    flexDirection: "row",
  },
});

export default ChipList;
