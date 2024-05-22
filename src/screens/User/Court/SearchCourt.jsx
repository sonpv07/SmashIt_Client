import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "../../../components/Atoms/SearchInput";
import Icon from "react-native-vector-icons/FontAwesome6";
import { COLORS } from "../../../theme/colors";
import { SIZE } from "../../../theme/fonts";
import ChipList from "../../../components/Molecules/ChipList";
import CourtItem from "../../../components/Organisms/CourtItem";

export default function SearchCourt() {

  const searchCourt = [1,2,3,4,5,];

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchInput />
      </View>
      <View style={styles.suggestLocation}>
        <View style={styles.suggestLocation_Title}>
          <Text style={[styles.title, { fontSize: SIZE.size_16 }]}>
            Gợi ý vị trí gần bạn
          </Text>
          <View style={styles.location}>
            <Icon
              name="location-arrow"
              size={13}
              color={COLORS.darkGreenText}
            />
            <Text
              style={[
                { fontSize: SIZE.size_14, color: COLORS.darkGreenText },
                styles.title,
              ]}
            >
              Thành phố Thủ Đức
            </Text>
          </View>
        </View>
        <View style={styles.suggestLocation_List}>
          <ChipList />
        </View>
      </View>
      <View style={styles.searchCourt}>
        <Text style={[styles.title, {fontSize: SIZE.size_16}]}>Gợi ý kết quả tìm kiếm</Text>
        <ScrollView
          // contentContainerStyle={{gap: 20}}
          style={styles.result}
          showsVerticalScrollIndicator={false}
        >
          {
            searchCourt.map((court, index) => {
              return (
                <View key={index} style={styles.court}>
                  <CourtItem/>
                  <View style={styles.hr}/>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  search: {
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
    paddingBottom: 15,
  },
  suggestLocation: {
    marginTop: 5,
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
    paddingBottom: 15,
  },
  suggestLocation_Title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "quicksand-bold",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  suggestLocation_List: {
    marginTop: 20,
  },
  searchCourt: {
    marginTop: 5,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  result: {
    marginTop: 20,
    height: 600,
  }, 
  court: {
    
  }, 
  hr: {
    borderWidth: 1, 
    borderColor: COLORS.greyBackground,
    marginVertical: 20,

  }
});
