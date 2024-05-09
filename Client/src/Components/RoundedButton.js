import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { appColors } from "../Utils/appColors";

export const RoundedButton = ({
  style = {},
  styletext = {},
  size = 100,
  width = {},

  ...props
}) => {
  return (
    <TouchableOpacity style={styles(size, width).button}>
      <Text onPress={props.onPress} style={styles(size).text}>
        {props.title} {props.width}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (size, width) =>
  StyleSheet.create({
    button: {
      borderRadius: size / 3,
      borderWidth: 1.5,
      borderColor: appColors.themeMagenda,
      width: width | size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: appColors.themeMagenda,
      fontSize: size / 4,
      fontWeight: "bold",
    },
  });
