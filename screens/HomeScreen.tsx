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
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <MemberBox />
        <TripsBox style={styles.trips} />
        <View style={styles.infoArea}>
          <InfoHero />
        </View>
      </ScrollView>
    </View>
  );
}
