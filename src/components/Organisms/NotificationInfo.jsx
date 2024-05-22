import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE } from "../../theme/fonts";

const feeds = [
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 1,
  },
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 2,
  },
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 3,
  },
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 4,
  },
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 5,
  },
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 6,
  },
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 7,
  },
  {
    title: "anhddp đã thích bài viết của bạn",
    desc: "Nếu bạn thích cầu lông và muốn gặp gỡ những người đồng đội mới, hãy tham gia ngay!...",
    timeStamp: "02 Th4, 16:10",
    id: 8,
  },
];

const NotificationInfo = ({ notificationList, icon }) => {
  return (
    <View>
      <FlatList
        data={feeds}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            <View style={styles.feedContainer}>
              <Image
                source={icons.feed}
                resizeMode="contain"
                style={{ marginTop: 8 }}
              />
              <View style={styles.feedContent}>
                <Text style={styles.feedTitle}>{item.title}</Text>
                <Text style={styles.feedDesc}>{item.desc}</Text>
                <Text style={styles.timeStamp}>{item.timeStamp}</Text>
              </View>
              {/* Conditionally render the bottom divider for each item except the last one */}
            </View>
            {index !== feeds.length - 1 && (
              <View style={styles.bottomDivider} />
            )}
          </>
        )}
        contentContainerStyle={{ marginLeft: 15 }}
      />
    </View>
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
  },
  feedContent: {
    flex: 1,
    marginLeft: 13,
    // width: "100%",
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
    width: "calc(100% - 12)",
    height: 1,
    backgroundColor: "#E5E5E5",
    marginRight: 12,
    marginVertical: 20,
  },
});
