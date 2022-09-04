import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MemberBox from "./components/MemberBox";

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <MemberBox />
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}
