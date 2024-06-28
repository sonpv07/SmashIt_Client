import {
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import FontLoader from "./src/components/FontLoader";
import Navigation from "./src/navigation/Navigation";

import { COLORS } from "./src/theme/colors";

import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "./src/context/AuthContext";
import { CourtOwnerProvider } from "./src/context/CourtOwnerContext";
import { LoadingProvider } from "./src/context/LoadingContext";

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <NativeBaseProvider>
      <LoadingProvider>
        <AuthProvider>
          <CourtOwnerProvider>
            <FontLoader>
              <SafeAreaView style={styles.safeContainer}>
                {/* <TopContent /> */}
                {/* <CourtCodeManagement /> */}
                <Navigation />
                {/* <CourtOwner /> */}
                {/* <SplashScreen_User /> */}
                {/* <QRCode /> */}
                {/* <ConfirmPayment /> */}
                {/* <Package /> */}
                {/* <PackageDetail /> */}
                <StatusBar />
              </SafeAreaView>
            </FontLoader>
          </CourtOwnerProvider>
        </AuthProvider>
      </LoadingProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    // marginTop: 50,
    // paddingHorizontal: 10
    // marginTop: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
