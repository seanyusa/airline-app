import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import backgroundImage from "./assets/dominika-roseclay-night-sky.jpg";
import BottomSheet from "./components/BottomSheet";

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
      <BottomSheet snapPoints={[windowHeight * 0.3, windowHeight * 0.83]}>
        <Text>Testing</Text>
      </BottomSheet>
    </SafeAreaView>
  );
}
