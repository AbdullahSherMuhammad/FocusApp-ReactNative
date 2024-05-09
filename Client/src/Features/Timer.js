import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  NativeEventEmitter,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../Components/RoundedButton";
import { fontSizes, paddingSizes, marginSizes } from "../Utils/sizes";
import { appColors } from "../Utils/appColors";

const windowWidth = Dimensions.get("window").width;

export const Timer = ({ focusSubject }) => {
  const [count, setCount] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Focusing On :</Text>
        <Text style={styles.task}>{focusSubject}</Text>
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
  title: {
    color: appColors.themeMagenda,
    paddingLeft: paddingSizes.xxxl,
  },
  task: {
    color: appColors.themeMagenda,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
