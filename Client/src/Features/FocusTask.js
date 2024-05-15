import React from "react";
import { View, Text, StyleSheet } from "react-native";
<<<<<<< HEAD
import { space } from "../Utils/sizes";
import { GlobalStyles } from "../Utils/GlobalStyles";
=======
import { size, space } from "../Utils/sizes";
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69

function FocusTask({ focusSubject }) {
  return (
    <View style={styles.FocusDetails}>
      <Text style={styles.title}>Focusing On :</Text>
      <Text style={styles.task}>{focusSubject}</Text>
      <Countdown style={{ flex: 1 }} Time={focusTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
<<<<<<< HEAD
    color: GlobalStyles.themeMagenda,
    paddingLeft: space.xxxl,
  },
  task: {
    color: GlobalStyles.themeMagenda,
=======
    color: appColors.themeMagenda,
    paddingLeft: space.xxxl,
  },
  task: {
    color: appColors.themeMagenda,
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default FocusTask;
