import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

export default function TabBar({ tabItem, setTab, currentTab, fontSize }) {
  const handleChangeTab = (value) => {
    if (currentTab === value) {
      console.log("NNN");
      return;
    } else {
      setTab(value);
    }
  };

  return (
    <View style={styles.tabBar}>
      {tabItem.map((item) => {
        return (
          <TouchableOpacity
            style={styles.tabItem}
            key={item.id}
            onPress={() => handleChangeTab(item.id)}
          >
            <Text
              style={[
                { fontSize: fontSize },
                item.id === currentTab ? styles.tabItemActive : styles.tabItem,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: 20,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  tabItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontFamily: "quicksand-semibold",
  },

  tabItemActive: {
    paddingVertical: 15,
    borderBottomColor: COLORS.darkGreenText,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontFamily: "quicksand-bold",
    color: COLORS.darkGreenText,
  },
});
