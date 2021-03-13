import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function LoginScreen(props) {
  const { navigation } = props; // Always need access to navigation
    return (
      <View style={globalStyles.conatainer}>
        <Text style={globalStyles.titleText}>Login Screen</Text>
        <TextInput
            style={globalStyles.input}
            placeholder="email"
            textAlign="center"
        />
        <TextInput
            style={globalStyles.input}
            placeholder="password"
            textAlign="center"
        />
        <View style={globalStyles.buttonContainer}>
        <Button 
            title='Login' 
            onPress={() => navigation.navigate('Home')}   
        />
        </View>
        <Text style={globalStyles.titleText}>Don't have an acount? Create one!</Text>
        <View style={globalStyles.buttonContainer}>
        <Button title='Create account' />
        </View>
      </View>
    );
  }