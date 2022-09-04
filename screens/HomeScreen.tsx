import { ScrollView, StyleSheet, View } from "react-native";
import MemberBox from "../components/MemberBox";
import TripsBox from "../components/TripsBox";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  trips: {
    marginTop: 12,
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <MemberBox />
        <TripsBox style={styles.trips} />
      </ScrollView>
    </View>
  );
}
