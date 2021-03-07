import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TripsScreen from "../screens/trips";

const TripStack = createStackNavigator();

export default function TripsStack() {
    return (
      <TripStack.Navigator 
          initialRouteName='Trips'
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
          <TripStack.Screen 
            name="Trips" 
            component={TripsScreen} 
            options={{ title: 'Trips' }}
          />
  
        </TripStack.Navigator>
    );
  }