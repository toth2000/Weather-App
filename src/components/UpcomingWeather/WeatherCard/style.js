import { StyleSheet } from "react-native";
import { themeColor } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColor.alternate,
    height: 100,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 5,
  },
  wrapper: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  dateText: {
    fontSize: 20,
  },
  description: {
    fontSize: 25,
  },
  minMaxText: {},
  otherText: { fontSize: 16 },
});
