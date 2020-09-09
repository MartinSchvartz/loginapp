import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import { Constants } from "expo";
import ApiKeys from "./../constants/ApiKeys.js";
import * as firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(ApiKeys.FireBaseConfig);
}

const HomeScreen = ({ navigation }) => {
  const [value, onChangeText] = React.useState("");
  const [value1, onChangeText1] = React.useState("");
  return (
    <View style={styles.MainContainer}>
      <Image source={require("../assets/logo.jpg")}></Image>

      <TextInput
        style={styles.username}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={"Email"}
        placeholderTextColor="#202020"
        onSubmitEditing={Keyboard.dismiss}
        clearTextOnFocus={true}
        paddingTop={5}
        textAlign={"center"}
      />
      <TextInput
        style={styles.username}
        onChangeText={(text) => onChangeText1(text)}
        value={value1}
        placeholder={"Contraseña"}
        placeholderTextColor="#202020"
        onSubmitEditing={Keyboard.dismiss}
        clearTextOnFocus={true}
        paddingTop={5}
        textAlign={"center"}
        secureTextEntry={true}
      />
      <View style={{ paddingTop: 20 }}>
        <Button
          title={"Registrarse"}
          onPress={() => console.log("Te estas registrando")}
          paddingTop={50}
        ></Button>
      </View>
    </View>
  );
};
export { HomeScreen };

const styles = StyleSheet.create({
  username: {
    //caretHidden: true,
    height: 40,
    borderColor: "gray",
    marginTop: 10,
    borderWidth: 1,
    textAlign: "center",
    width: "95%",
  },
  MainContainer: {
    flex: 0.5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
