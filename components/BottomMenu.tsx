import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import BottomSheet from "./BottomSheet";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  actionRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 8,
  },
  actionButtonContent: {
    alignItems: "center",
    width: 128,
  },
  actionCircle: {
    backgroundColor: "#4693fa",
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    color: "#4693fa",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
});

export default function BottomMenu() {
  return (
    <BottomSheet snapPoints={[windowHeight * 0.3, windowHeight * 0.82]}>
      <View style={styles.actionRow}>
        <TouchableOpacity>
          <View style={styles.actionButtonContent}>
            <View style={styles.actionCircle}>
              <Feather name="clock" size={24} color="#ffffff" />
            </View>
            <Text style={styles.actionLabel}>Flight status</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actionButtonContent}>
            <View style={styles.actionCircle}>
              <Feather name="search" size={24} color="#ffffff" />
            </View>
            <Text style={styles.actionLabel}>Find trip</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actionButtonContent}>
            <View style={styles.actionCircle}>
              <Ionicons name="ios-airplane-outline" size={26} color="#ffffff" />
            </View>
            <Text style={styles.actionLabel}>Book flights</Text>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}
