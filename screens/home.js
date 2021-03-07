import * as React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { globalStyles } from '../styles/global';

// Object 'character' with some parameters to be passed
const character = {
  name: 'Luke Skywalker',
  home: 'Tatooine',
  species: 'human'
};

export default function HomeScreen(props) {
  const { navigation } = props; // this is necessary to be able to use navigation below
    return (
      <View style={globalStyles.conatainer}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
        
        {/* <TouchableOpacity
          style={globalStyles.buttonContainer}
          
          // You can pass parameters to a route by putting the params in an object as 
          // the second arguement using navigation.navigate. 
          onPress={() => navigation.navigate('Details', { item: character })}
        >
          <Text style={globalStyles.buttonText}>Who is {character.name}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }