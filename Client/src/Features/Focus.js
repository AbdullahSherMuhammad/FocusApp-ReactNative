import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../Components/RoundedButton";
import { size, space } from "../Utils/sizes";
import { GlobalStyles } from "../Utils/GlobalStyles";

export const Focus = ({ addSubject }) => {
  const [textEntered, setTextEntered] = useState("What?");
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>What do you want to concentrate on?</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.textInputbox}
          textColor={GlobalStyles.IvoryWhite}
          cursorColor={GlobalStyles.themeMagenda}
          activeUnderlineColor={GlobalStyles.themeMagenda}
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
    // padding: space.xxxl,
  },
  titlecontainer: {
    flex: 1,
    paddingTop: space.xxxl,
    paddingBottom: space.xl,
    justifyContent: "center",
  },
  title: {
    color: GlobalStyles.themeMagenda,
    fontSize: 50,
    fontWeight: "bold",
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: space.xl,
  },
  textInputbox: {
    flex: 1,
    marginRight: 5,
    backgroundColor: "#9b009b",
    fontWeight: "bold",
    fontSize: 18,
  },
});
