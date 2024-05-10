import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Appearance,
  AppRegistry,
} from "react-native";
import { appColors } from "./src/Utils/appColors.js";
import { size, space } from "./src/Utils/sizes.js";
import { Screen } from "./src/Screen.js";

export default function App() {
  const [mode, setMode] = useState(Appearance.getColorScheme());
  const getMode = () => {
    return mode;
  };
  useEffect(() => {
    const appearanceSubscription = Appearance.addChangeListener(
      ({ colorScheme }) => {
        setMode(colorScheme);
      }
    );
    return () => appearanceSubscription.remove();
  }, []);

  return <Screen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform === "ios" ? space.lg : space.xxxl,
    backgroundColor: appColors.IvoryWhite,
    alignItems: "center",
  },
  focus: {
    flex: 0.27,
  },
  timer: {
    flex: 0.5,
  },
});
