import { StyleSheet, StatusBar } from "react-native";

import { themeColor } from "../../../theme";

export const styles = StyleSheet.create({
  // Containers
  safeContainer: {
    flex: 1,
    backgroundColor: themeColor.primary,
    paddingTop: 10,
  },
  container: {
    flex: 1,
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
    marginLeft: 10,
    marginRight: 10,
  },

  //   Texts
  tempText: {
    color: themeColor.textColor,
    fontSize: 48,
  },
  feelText: {
    color: themeColor.textColor,
    fontSize: 28,
  },
  highLowText: {
    color: themeColor.textColor,
    fontSize: 18,
  },
  descriptionText: {
    color: themeColor.textColor,
    fontSize: 48,
  },
  messageText: {
    color: themeColor.textColor,
    fontSize: 30,
  },
});
