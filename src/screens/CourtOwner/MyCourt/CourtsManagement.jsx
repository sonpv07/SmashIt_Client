import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OwnedCourtCard from "../../../components/Organisms/OwnedCourtCard";
import Divider from "../../../components/Atoms/Divider";

export default function CourtsManagement({ navigation }) {
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

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
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
              action={"ABCD"}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
});
