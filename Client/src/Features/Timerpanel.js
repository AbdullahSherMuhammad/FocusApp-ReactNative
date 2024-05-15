<<<<<<< HEAD
import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { RoundedButton } from "../Components/RoundedButton";
import { size, space } from "../Utils/sizes";
import { GlobalStyles } from "../Utils/GlobalStyles";
=======
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Countdown } from "../Components/Countdown";
import { RoundedButton } from "../Components/RoundedButton";
import { size, space } from "../Utils/sizes";
import { appColors } from "../Utils/appColors";
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69

const windowWidth = Dimensions.get("window").width;

export const Timerpanel = ({ focusSubject }) => {
  const [focusTime, setFocusTime] = useState(15); //focus time is given in minutes
  return (
    <View style={styles.container}>
      <View style={styles.buttonpanel}>
        <RoundedButton title="5min" size={70} onPress={() => setFocusTime(5)} />
        <RoundedButton
          title="10min"
          size={70}
          onPress={() => setFocusTime(10)}
        />
        <RoundedButton
          title="15min"
          size={70}
          onPress={() => setFocusTime(15)}
        />
      </View>
      <View style={styles.startButton}>
        <RoundedButton title="Start" size={70} width={250} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth - 20,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingBottom: 20,
  },
  buttonpanel: {
    alignSelf: "center",
    width: windowWidth - 120,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: space.xl,
  },
  startButton: {
    display: "flex",
    alignSelf: "center",
  },
});
