import { StyleSheet, Text, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    alignItems: "flex-start",
    borderRadius: 4,
  },
  numTripsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  label: {
    fontSize: 17,
    color: "#bbbbbb",
    marginBottom: 4,
    fontFamily: "OpenSans-Regular",
  },
  numTrips: {
    fontSize: 30,
    color: "#ffffff",
    fontFamily: "OpenSans-Light",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#555555",
  },
  tripRow: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tripName: {
    fontSize: 22,
    color: "#3d49eb",
    fontFamily: "OpenSans-Regular",
  },
  tripDetails: {
    fontSize: 14,
    color: "#dddddd",
    fontFamily: "OpenSans-Regular",
  },
});

type Props = {
  style?: ViewStyle;
};

export default function TripsBox(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.numTripsContainer}>
        <Text style={styles.label}>You have</Text>
        <Text style={styles.numTrips}>1 upcoming trip</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.tripRow}>
        <Text style={styles.tripName}>AUS -&gt; ORD</Text>
        <Text style={styles.tripDetails}>
          THURSDAY, SEPTEMBER 22, 2022 • XDDLSD
        </Text>
      </View>
    </View>
  );
}
