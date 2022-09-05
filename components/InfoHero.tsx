import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 6,
    height: 380,
    width: 324,
  },
  contentBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 128,
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
    <TouchableNativeFeedback
      onPress={() => {
        WebBrowser.openBrowserAsync(
          "https://exploreamerican.com/newaadvantage",
          {
            presentationStyle:
              WebBrowser.WebBrowserPresentationStyle.PAGE_SHEET,
          }
        );
      }}
    >
      <View style={[styles.container, props.style]}>
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0)"]}
          style={styles.contentBackground}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.description}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}
