import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b2b2b",
    alignItems: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
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
  tripRowTouchable: {
    flexDirection: "row",
  },
  tripRow: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
  },
  tripTextContainer: {
    flex: 1,
  },
  tripNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  tripName: {
    fontSize: 22,
    color: "#4693fa",
    fontFamily: "OpenSans-Regular",
  },
  tripArrow: {
    marginHorizontal: 4,
  },
  tripDetails: {
    fontSize: 14,
    color: "#dddddd",
    fontFamily: "OpenSans-Regular",
  },
  caret: {
    marginTop: 2,
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
      <TouchableHighlight
        style={styles.tripRowTouchable}
        underlayColor="#1e1e1e"
        onPress={() => {}}
      >
        <View style={styles.tripRow}>
          <View style={styles.tripTextContainer}>
            <View style={styles.tripNameRow}>
              <Text style={styles.tripName}>AUS</Text>
              <AntDesign
                style={styles.tripArrow}
                name="arrowright"
                size={22}
                color="#4693fa"
              />
              <Text style={styles.tripName}>ORD</Text>
            </View>
            <Text style={styles.tripDetails}>
              THURSDAY, SEPTEMBER 22, 2022 • XDDLSD
            </Text>
          </View>
          <MaterialIcons
            style={styles.caret}
            name="keyboard-arrow-right"
            size={24}
            color="#4693fa"
          />
        </View>
      </TouchableHighlight>
    </View>
  );
}
