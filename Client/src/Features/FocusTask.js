import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { space } from "../Utils/sizes";
import { GlobalStyles } from "../Utils/GlobalStyles";

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
    color: GlobalStyles.themeMagenda,
    paddingLeft: space.xxxl,
  },
  task: {
    color: GlobalStyles.themeMagenda,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default FocusTask;
