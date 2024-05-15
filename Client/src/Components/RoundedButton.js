import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../Utils/GlobalStyles";

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
      borderColor: GlobalStyles.themeMagenda,
      width: width | size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: GlobalStyles.themeMagenda,
      fontSize: size / 4,
      fontWeight: "bold",
    },
  });
