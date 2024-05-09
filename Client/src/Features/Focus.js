import React, { useState } from "react";
import { View, Text, StyleSheet, NativeEventEmitter } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../Components/RoundedButton";
import { fontSizes, paddingSizes, marginSizes } from "../Utils/sizes";
import { appColors } from "../Utils/appColors";

export const Focus = ({ addSubject }) => {
  const [textEntered, setTextEntered] = useState("What?");
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>What do you want to Focus on?</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.textInputbox}
          textColor={appColors.themeMagenda}
          cursorColor={appColors.themeMagenda}
          activeUnderlineColor={appColors.themeMagenda}
          onSubmitEditing={({ nativeEvent }) => {
            addSubject(nativeEvent.text);
          }} // works with android's Go button on Android keyboard
          onChangeText={(newText) => {
            setTextEntered(newText);
          }} // to work with out custom roundedbutton
          defaultValue={textEntered}
        ></TextInput>
        <RoundedButton
          title="+"
          size={45}
          onPress={() => addSubject(textEntered)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: paddingSizes.xxxl,
  },
  titlecontainer: {
    paddingTop: paddingSizes.xxxl,
    paddingBottom: paddingSizes.xl,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: appColors.themeMagenda,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputbox: {
    flex: 1,
    marginRight: 5,
    backgroundColor: "#9b009b",
    fontWeight: "bold",
    fontSize: 18,
  },
});
