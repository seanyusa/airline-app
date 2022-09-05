import { ScrollView, StyleSheet, Text, View } from "react-native";
import MemberBox from "../components/MemberBox";
import TripsBox from "../components/TripsBox";
import InfoHero from "../components/InfoHero";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollView: {
    overflow: "visible",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  logo: {
    fontSize: 21,
    color: "#fff",
    fontFamily: "OpenSans-SemiBold",
  },
  trips: {
    marginTop: 12,
  },
  infoArea: {
    marginTop: 12,
    marginHorizontal: -6,
    overflow: "visible",
  },
  infoItem: {
    marginHorizontal: 6,
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <Text style={styles.logo}>Airline</Text>
        </View>
        <MemberBox />
        <TripsBox style={styles.trips} />
        <ScrollView
          style={styles.infoArea}
          horizontal
          pagingEnabled
          disableIntervalMomentum
          decelerationRate={0}
          snapToInterval={324 + 12}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
        >
          <InfoHero style={styles.infoItem} />
          <InfoHero style={styles.infoItem} />
          <InfoHero style={styles.infoItem} />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
