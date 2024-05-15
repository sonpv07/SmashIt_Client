import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = (props) => {
    const [input, setInput] = useState("");
  return (
    <View style={styles.view}>
      <TextInput style={styles.input} placeholder={props.placeholder}/>
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
        width: 300,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        height: 100,
    },
    input: {
        width: '100%',
        paddingVertical: '8%' ,

    }
}) 

export default Input;
