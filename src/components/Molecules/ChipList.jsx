import React from "react";
import Chip from "../Atoms/Chip";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

const ChipList = () => {
  const data = [
    "Long Thạnh Mỹ",
    "Long Phước",
    "Linh Đông",
    "An Khánh",
    "Bình Trưng Đông",
    "Tăng Nhơn Phú B",
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipList}>
        {data.map((locate, index )=> {
            return <Chip key={index} text={locate} />
        })}
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
