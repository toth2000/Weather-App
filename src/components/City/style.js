import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "teal",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    padding: 10,
  },
  iconWrapper: {
    flexDirection: "row",
    backgroundColor: "yellow",
    margin: 25,
    gap: 50,
  },
  timeIconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cityText: {
    fontSize: 48,
  },
  countryText: {
    fontSize: 35,
  },
  timeText: {
    fontSize: 28,
  },
});
