import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import backgroundImage from "./assets/dominika-roseclay-night-sky.jpg";
import BottomSheet from "./components/BottomSheet";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

SplashScreen.preventAutoHideAsync();

const screenDimensions = Dimensions.get("screen");
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#222222",
  },
  backgroundImage: {
    position: "absolute",
    width: screenDimensions.width,
    height: screenDimensions.height,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 8,
  },
  actionButtonContent: {
    alignItems: "center",
    width: 128,
  },
  actionCircle: {
    backgroundColor: "#4693fa",
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    color: "#4693fa",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.app} onLayout={onLayoutRootView}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <HomeScreen />
      <BottomSheet snapPoints={[windowHeight * 0.3, windowHeight * 0.82]}>
        <View style={styles.actionRow}>
          <TouchableOpacity>
            <View style={styles.actionButtonContent}>
              <View style={styles.actionCircle}>
                <Feather name="clock" size={24} color="#ffffff" />
              </View>
              <Text style={styles.actionLabel}>Flight status</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.actionButtonContent}>
              <View style={styles.actionCircle}>
                <Feather name="search" size={24} color="#ffffff" />
              </View>
              <Text style={styles.actionLabel}>Find trip</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.actionButtonContent}>
              <View style={styles.actionCircle}>
                <Ionicons
                  name="ios-airplane-outline"
                  size={26}
                  color="#ffffff"
                />
              </View>
              <Text style={styles.actionLabel}>Book flights</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
