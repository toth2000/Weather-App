import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  // Containers
  safeContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    justifyContent: "center",
  },
  highLowWrapper: {
    flexDirection: "row",
    gap: 15,
  },
  descriptionWrapper: {
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  //   Texts
  tempText: {
    color: "black",
    fontSize: 48,
  },
  feelText: {
    color: "black",
    fontSize: 28,
  },
  highLowText: {
    color: "black",
    fontSize: 18,
  },
  descriptionText: {
    fontSize: 48,
  },
  messageText: {
    fontSize: 30,
  },
});
