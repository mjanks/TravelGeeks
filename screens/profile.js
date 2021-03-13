import * as React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ProfileScreen(props) {
  const { navigation } = props; // Always need access to navigation
    return (
      <View style={globalStyles.conatainer}>
        <Text style={globalStyles.titleText}>Profile Screen</Text>

        
        
      </View>
    );
  }