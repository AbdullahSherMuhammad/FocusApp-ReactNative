import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const RoundedButton = ({
  style = {},
  styletext = {},
  size = 100,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles(size).radius}>
      <Text onPress={props.onPress} style={styles(size).text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 3,
      borderWidth: 1,
      borderColor: "#720072",
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "#720072",
      fontSize: size / 2,
      fontWeight: "bold",
    },
  });
