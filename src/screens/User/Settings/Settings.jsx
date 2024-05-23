import React from "react";
import { ScrollView, StyleSheet } from "react-native";


const Settings = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.account}>
          <Text>Nguyễn Minh Anh</Text>
          <View></View>
        </View>
        <View>
            <Text></Text>
            <View></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    account: {

    }
})

export default Settings;
