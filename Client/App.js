import React from "react";
import { StyleSheet, Platform } from "react-native";
import { appColors } from "./src/Utils/appColors.js";
import { size, space } from "./src/Utils/sizes.js";
import { Screen } from "./src/Screen.js";
import { Focus } from "./src/Features/Focus.js";

export default function App() {
  return <Screen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform === "ios" ? space.lg : space.xxxl,
    backgroundColor: appColors.bgTeal,
    alignItems: "center",
  },
  focus: {
    flex: 0.27,
  },
  timer: {
    flex: 0.5,
  },
});
