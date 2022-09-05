import { StyleSheet, Text, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 4,
  },
  name: {
    fontSize: 19,
    fontFamily: "OpenSans-SemiBold",
    marginBottom: 6,
  },
  text: {
    color: "#ffffff",
    fontFamily: "OpenSans-Regular",
  },
});

type Props = {
  style?: ViewStyle;
};

export default function MemberBox(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.text, styles.name]}>Sean Wang</Text>
      <Text style={styles.text}>AAdvantage member</Text>
      <Text style={styles.text}>Available award miles: 32,030</Text>
    </View>
  );
}
