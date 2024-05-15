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
import { size, space } from "./Utils/sizes.js";
import { useGlobal } from "./States/globalStates.js";
import { GlobalStyles } from "./Utils/GlobalStyles.js";

// Dimensions.get("screen").width; stays fix to screen dimensions and
// wont change with screen rotations or split screens

//const windowWidth = Dimensions.get("window").width; //with window dimenstions of app changes with rotation or
//splitscreens

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
          <Timerpanel focusSubject={focusSubject} />
        </View>

        <Text>
          {height} and {width} and screen is {dimensions.screen.height} and{" "}
          {mode}
        </Text>
      </View>
    </ScrollView>
  );
}

const screenStyles = StyleSheet.create({
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
