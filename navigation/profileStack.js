import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from "../screens/profile";

const ProfStack = createStackNavigator();

export default function ProfileStack() {
    return (
      <ProfStack.Navigator 
          initialRouteName='Profile'
          screenOptions={{
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: '#101010'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
          }}
          headerMode='none'
        >
          <ProfStack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Profile Screen' }}
          />
  
        </ProfStack.Navigator>
    );
  }