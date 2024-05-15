import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Appearance,
  AppRegistry,
} from "react-native";
<<<<<<< HEAD
import { GlobalStyles } from "./src/Utils/GlobalStyles.js";
import { size, space } from "./src/Utils/sizes.js";
import { Screen } from "./src/Screen.js";
import { GlobalProvider } from "./src/States/globalStates.js";
=======
import { appColors } from "./src/Utils/appColors.js";
import { size, space } from "./src/Utils/sizes.js";
import { Screen } from "./src/Screen.js";
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69

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

<<<<<<< HEAD
  return (
    <GlobalProvider>
      <Screen />
    </GlobalProvider>
  );
}
=======
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
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69
