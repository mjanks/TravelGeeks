import * as React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ProfileScreen(props) {
  const { navigation } = props; // Always need access to navigation
    return (
      <View style={globalStyles.conatainer}>
        <Text style={globalStyles.titleText}>Profile Screen</Text>

        {/* <TouchableOpacity
          style={globalStyles.buttonContainer}
        // Using 'popToTop' method to return to the top of the stack, 
        // which is the Home screen. This way we don't have to click back through 
        // the details screen to get there.
          onPress={() => navigation.popToTop()}
        >
          <Text style={globalStyles.buttonText}>Go to home</Text>
        </TouchableOpacity> */}
        
      </View>
    );
  }