import React, { useState } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Focus } from "./src/Features/Focus";

export default function App() {
  const colorScheme = useColorScheme();
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      <Focus addSubject={setFocusSubject}></Focus>
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    alignItems: "center",
  },
});
