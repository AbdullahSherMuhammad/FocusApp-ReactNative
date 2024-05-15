import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Appearance,
  AppRegistry,
} from "react-native";
import { GlobalStyles } from "./src/Utils/GlobalStyles.js";
import { size, space } from "./src/Utils/sizes.js";
import { Screen } from "./src/Screen.js";
import { GlobalProvider } from "./src/States/globalStates.js";

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

  return (
    <GlobalProvider>
      <Screen />
    </GlobalProvider>
  );
}
