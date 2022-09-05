import { StyleSheet, Text, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 4,
    height: 400,
    width: 324,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
    fontFamily: "OpenSans-Regular",
  },
  content: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "OpenSans-Regular",
  },
});

type Props = {
  style?: ViewStyle;
};

export default function InfoHero(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>Turn shopping into travel</Text>
      <Text style={styles.content}>
        Everyday spend can earn you miles to redeem on travel plus Loyalty
        Points toward status at the same time.
      </Text>
    </View>
  );
}
