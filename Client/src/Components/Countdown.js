import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Text } from "react-native";
=======
import { View, Text, StyleSheet } from "react-native";
>>>>>>> 4a1229d3e83b1dc3b15c6d49ae5881840bb8ca69

export const Countdown = ({ Time }) => {
  const minutes = Time;
  const milisecs = minutes * 60 * 1000;
  const [counter, setCounter] = useState(minutes);
  useEffect(() => {
    setInterval(() => {
      counter > 0 ? setCounter((prevValue) => --prevValue) : setCounter(0);
    }, 60 * 1000);
  });
  return counter > 0 ? <Text>{counter}</Text> : <Text>Focus Completed</Text>;
};
