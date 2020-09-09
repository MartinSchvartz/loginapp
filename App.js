import * as React from "react";
import { View, Text, StyleSheet, Button, Alert, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { TextInput } from "react-native-gesture-handler";
import { HomeScreen } from "./screens/homescreen.js";
import { TestComponent } from "./Components/TestComponent.js";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
