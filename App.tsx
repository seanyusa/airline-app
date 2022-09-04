import { StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#222222",
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <HomeScreen />
    </SafeAreaView>
  );
}
