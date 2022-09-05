import { StyleSheet, Text, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 6,
    height: 400,
    width: 324,
  },
  title: {
    fontSize: 17,
    color: "#fff",
    marginBottom: 4,
    fontFamily: "OpenSans-SemiBold",
  },
  content: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "OpenSans-Regular",
  },
});

type Props = {
  style?: ViewStyle;
  title: string;
  description: string;
};

export default function InfoHero(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.description}</Text>
    </View>
  );
}
