import React, { Component } from "react";
import * as firebase from "firebase";
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
import "firebase/auth";
import { auth } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkTZOTwQvp-9wy4gwxeGH-ppbsYRDghBc",
  authDomain: "loginapp-4324.firebaseapp.com",
  databaseURL: "https://loginapp-4324.firebaseio.com",
  projectId: "loginapp-4324",
  storageBucket: "loginapp-4324.appspot.com",
  messagingSenderId: "658192463711",
  appId: "1:658192463711:web:e06f0263fe92fa4d0168ea",
  measurementId: "G-BQ4S0SGYKW",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = ({ navigation }) => {
  function CrearUsuario(User, Password) {
    auth()
      .createUserWithEmailAndPassword(User, Password)
      .then(() => {
        console.log("User account created and signed in!");
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }
        if (error.code == "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
        console.error(error);
      });
  }

  const [email, onChangeText] = React.useState("");
  const [password, onChangeText1] = React.useState("");
  return (
    <View style={styles.MainContainer}>
      <Image source={require("./../assets/logo.jpg")}></Image>

      <TextInput
        style={styles.username}
        onChangeText={(text) => onChangeText(text)}
        value={email}
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
        value={password}
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
          onPress={() => CrearUsuario(email, password)}
          paddingTop={50}
        ></Button>
      </View>
    </View>
  );
};
export { LogIn };

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
