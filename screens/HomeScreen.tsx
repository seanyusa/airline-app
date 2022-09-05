import { ScrollView, StyleSheet, View } from "react-native";
import MemberBox from "../components/MemberBox";
import TripsBox from "../components/TripsBox";
import InfoHero from "../components/InfoHero";

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
  },
  infoItem: {
    marginHorizontal: 6,
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
        >
          <InfoHero style={styles.infoItem} />
          <InfoHero style={styles.infoItem} />
          <InfoHero style={styles.infoItem} />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
