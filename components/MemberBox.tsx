import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0b0b0baa",
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 20,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "flex-start",
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
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={[styles.container, props.style]}>
        <View style={styles.contentContainer}>
          <Text style={[styles.text, styles.name]}>Sean Wang</Text>
          <Text style={styles.text}>AAdvantage member</Text>
          <Text style={styles.text}>Available award miles: 32,030</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#ffffff" />
      </View>
    </TouchableNativeFeedback>
  );
}
