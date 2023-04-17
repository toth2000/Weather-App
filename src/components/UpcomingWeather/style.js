import { StyleSheet } from "react-native";
import { themeColor } from "../../../theme";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: themeColor.primary,
  },
  container: {
    marginTop: 10,
    flex: 1,
    gap: 10,
  },
  headingText: {
    fontSize: 22,
    textAlign: "center",
  },
});
