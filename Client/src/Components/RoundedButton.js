import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
<<<<<<< HEAD
import { GlobalStyles } from "../Utils/GlobalStyles";
=======
import { appColors } from "../Utils/appColors";
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69

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
<<<<<<< HEAD
      borderColor: GlobalStyles.themeMagenda,
=======
      borderColor: appColors.themeMagenda,
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69
      width: width | size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
<<<<<<< HEAD
      color: GlobalStyles.themeMagenda,
=======
      color: appColors.themeMagenda,
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69
      fontSize: size / 4,
      fontWeight: "bold",
    },
  });
