import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE } from "../../theme/fonts";

const NotificationInfo = ({ list, icon }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()} // Ensure keyExtractor returns a string
      renderItem={({ item, index }) => (
        <>
          <View style={styles.feedContainer}>
            <Image
              source={icon}
              resizeMode="contain"
              style={{ marginTop: 8 }}
            />
            <View style={styles.feedContent}>
              <Text style={styles.feedTitle}>{item.title}</Text>
              <Text style={styles.feedDesc}>{item.desc}</Text>
              <Text style={styles.timeStamp}>{item.timeStamp}</Text>
            </View>
          </View>
          {index !== list.length - 1 && <View style={styles.bottomDivider} />}
        </>
      )}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

export default NotificationInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: SIZE.size_20,
    fontFamily: "quicksand-semibold",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  feedContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 15, // Add horizontal padding to ensure content isn't cut off
    paddingVertical: 10, // Add vertical padding
  },
  feedContent: {
    flex: 1,
    marginLeft: 13,
  },
  feedTitle: {
    fontFamily: "quicksand-semibold",
    fontSize: SIZE.size_14,
    marginBottom: 5,
  },
  feedDesc: {
    fontFamily: "quicksand-medium",
    fontSize: SIZE.size_12,
    marginBottom: 8,
  },
  timeStamp: {
    fontFamily: "quicksand-semibold",
    fontSize: SIZE.size_12,
    color: "#8C8C8C",
  },
  bottomDivider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 10,
  },
  flatListContentContainer: {
    paddingBottom: 20, // Add bottom padding to ensure last item is not cut off
  },
});
