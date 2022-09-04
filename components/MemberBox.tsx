import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 4,
  },
  name: {
    fontSize: 19,
    fontWeight: "500",
    marginBottom: 6,
  },
  text: {
    color: "#ffffff",
  },
});

export default function MemberBox() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.name]}>Sean Wang</Text>
      <Text style={styles.text}>AAdvantage member</Text>
      <Text style={styles.text}>Available award miles: 32,030</Text>
    </View>
  );
}
