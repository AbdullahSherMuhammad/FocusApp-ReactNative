import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import { Focus } from "./Features/Focus.js";
import { Timerpanel } from "./Features/Timerpanel.js";
<<<<<<< HEAD
import { size, space } from "./Utils/sizes.js";
import { useGlobal } from "./States/globalStates.js";
import { GlobalStyles } from "./Utils/GlobalStyles.js";
=======
import { appColors } from "./Utils/appColors.js";
import { size, space } from "./Utils/sizes.js";
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69

// Dimensions.get("screen").width; stays fix to screen dimensions and
// wont change with screen rotations or split screens

//const windowWidth = Dimensions.get("window").width; //with window dimenstions of app changes with rotation or
//splitscreens
<<<<<<< HEAD

export function Screen() {
  const [mode, dimensions] = useGlobal();

  const width = dimensions.window.width;
  const height = dimensions.window.height;

  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <ScrollView style={screenStyles.screencontainer}>
      <View style={screenStyles.contentcontainer}>
        <View style={screenStyles.focus}>
          <Focus addSubject={setFocusSubject} />
        </View>
        <View style={screenStyles.timerpanel}>
=======
const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");
const deviceFontSizing = Dimensions.get("window").fontScale;

export function Screen() {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const height = dimensions.window.height;
  const width = dimensions.window.width;

  const [focusSubject, setFocusSubject] = useState(null);
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
  });
  return (
    <ScrollView style={styles.screencontainer}>
      <View style={styles.contentcontainer}>
        <View style={styles.focus}>
          <Focus addSubject={setFocusSubject} />
        </View>
        <View style={styles.timerpanel}>
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69
          <Timerpanel focusSubject={focusSubject} />
        </View>

        <Text>
<<<<<<< HEAD
          {height} and {width} and screen is {dimensions.screen.height} and{" "}
          {mode}
=======
          {dimensions.window.height} and {width} and screen is{" "}
          {dimensions.screen.height}
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69
        </Text>
      </View>
    </ScrollView>
  );
}

<<<<<<< HEAD
const screenStyles = StyleSheet.create({
=======
const styles = StyleSheet.create({
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69
  screencontainer: {
    flex: 1,
    width: Screen.width,
    height: Screen.height,
    paddingTop: Platform === "ios" ? size.lg : size.lg,
  },
  contentcontainer: {
    alignItems: "flex-start",
    paddingLeft: space.md,
    paddingRight: space.md,
  },
  focus: {
    flex: 1,
    alignSelf: "center",
    paddingBottom: space.md,
  },
  timerpanel: {
    flex: 0.5,
  },
});
