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
    marginBottom: 12,
  },
  divider: {
    height: 1,
    marginHorizontal: -12,
    alignSelf: "stretch",
    backgroundColor: "#555555",
    marginBottom: 8,
  },
  tripName: {
    fontSize: 22,
    color: "#3d49eb",
  },
  tripDetails: {
    fontSize: 14,
    color: "#dddddd",
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
      <View style={styles.divider} />
      <Text style={styles.tripName}>AUS -&gt; ORD</Text>
      <Text style={styles.tripDetails}>
        THURSDAY, SEPTEMBER 22, 2022 • XDDLSD
      </Text>
    </View>
  );
}
