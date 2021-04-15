// ./App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/tabNavigator";
import { View, Text } from "react-native";

const id = 1;

const App = () => {
  if( id == 1)  {
    return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <View>
        <Text>Hello, World!</Text>
      </View>
    );
  }
  
};
export default App;