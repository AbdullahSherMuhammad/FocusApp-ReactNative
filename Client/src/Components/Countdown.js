import React, { useState, useEffect } from "react";
import { Text } from "react-native";

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
