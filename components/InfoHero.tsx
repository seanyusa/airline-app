import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
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
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 148,
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
  imageUri: string;
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
        <Image
          source={{ uri: props.imageUri }}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0)"]}
          style={styles.contentBackground}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.description}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}
