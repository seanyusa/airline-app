import { StyleSheet, Text, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 4,
  },
  label: {
    fontSize: 17,
    color: "#bbbbbb",
    marginBottom: 8,
  },
  numTrips: {
    fontSize: 30,
    fontWeight: "300",
    color: "#ffffff",
  },
});

type Props = {
  style?: ViewStyle;
};

export default function TripsBox(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>You have</Text>
      <Text style={styles.numTrips}>1 upcoming trip</Text>
    </View>
  );
}
