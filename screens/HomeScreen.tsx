import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MemberBox from "../components/MemberBox";
import TripsBox from "../components/TripsBox";
import InfoHero from "../components/InfoHero";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  logo: {
    flex: 1,
    fontSize: 21,
    color: "#fff",
    fontFamily: "OpenSans-SemiBold",
  },
  topIcon: {
    marginLeft: 24,
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

const hitSlop = { top: 16, left: 12, right: 12, bottom: 16 };

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <Text style={styles.logo}>Airline</Text>
          <TouchableOpacity style={styles.topIcon} hitSlop={hitSlop}>
            <FontAwesome name="comment-o" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topIcon} hitSlop={hitSlop}>
            <FontAwesome name="envelope-o" size={24} color="white" />
          </TouchableOpacity>
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
          <InfoHero
            style={styles.infoItem}
            title="Turn shopping into travel"
            description="Everyday spend can earn you miles to redeem on travel plus Loyalty Points toward status at the same time."
          />
          <InfoHero
            style={styles.infoItem}
            title="Experience the Northern Lights"
            description="Find great fares to Alaska."
          />
          <InfoHero
            style={styles.infoItem}
            title="Where's open, what's required?"
            description="Check entry restrictions and COVID-19 travel requirements for countries around the world."
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
