import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import { Focus } from "./Features/Focus.js";
import { Timerpanel } from "./Features/Timerpanel.js";
import { appColors } from "./Utils/appColors.js";
import { size, space } from "./Utils/sizes.js";

// Dimensions.get("screen").width; stays fix to screen dimensions and
// wont change with screen rotations or split screens

//const windowWidth = Dimensions.get("window").width; //with window dimenstions of app changes with rotation or
//splitscreens
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

  const colorScheme = useColorScheme();
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
          <Timerpanel focusSubject={focusSubject} />
        </View>

        <Text>
          {dimensions.window.height} and {width} and screen is{" "}
          {dimensions.screen.height}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    width: Screen.width,
    height: Screen.height,
    paddingTop: Platform === "ios" ? size.lg : size.lg,
    backgroundColor: appColors.bgTeal,
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
