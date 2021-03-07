import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SavedScreen from "../screens/saved";

const SaveStack = createStackNavigator();

export default function SavedStack() {
    return (
      <SaveStack.Navigator 
          initialRouteName='Saved'
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
          <SaveStack.Screen 
            name="Saved" 
            component={SavedScreen} 
            options={{ title: 'Saved Screen' }}
          />
  
        </SaveStack.Navigator>
    );
  }