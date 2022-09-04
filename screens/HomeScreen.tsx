import { StyleSheet, Text, View } from "react-native";
import MemberBox from "../components/MemberBox";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MemberBox />
    </View>
  );
}
