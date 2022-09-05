import {
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import MemberBox from "../components/MemberBox";
import TripsBox from "../components/TripsBox";
import InfoHero from "../components/InfoHero";
import Carousel from "react-native-reanimated-carousel";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  trips: {
    marginTop: 12,
  },
  infoArea: {
    marginTop: 12,
    marginHorizontal: -16,
    overflow: "visible",
  },
});

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView>
        <MemberBox />
        <TripsBox style={styles.trips} />
        <View style={styles.infoArea}>
          <Carousel
            loop={false}
            width={width}
            height={400}
            data={[0, 0, 0, 0]}
            scrollAnimationDuration={600}
            mode="horizontal-stack"
            // mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 1,
              parallaxScrollingOffset: 20,
              stackInterval: 400,
              scaleInterval: 0,
              opacityInterval: 0,
              rotateZDeg: 0,
            }}
            // onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => <InfoHero />}
            panGestureHandlerProps={{
              activeOffsetX: [-20, 20],
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
