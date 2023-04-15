import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "yellow",
  },

  container: {
    marginTop: (StatusBar.currentHeight || 0) + 10,
    flex: 1,
    gap: 10,
  },
  headingText: {
    fontSize: 22,
    textAlign: "center",
  },
});
