import { StyleSheet, StatusBar } from "react-native";
import { themeColor } from "../../../theme";

export const styles = StyleSheet.create({
  safeContainer: {
    height: 200,
    backgroundColor: themeColor.alternate,
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    flexDirection: "row",
    margin: 10,
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
    fontSize: 20,
  },
});
