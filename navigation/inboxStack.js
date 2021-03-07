import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InboxScreen from "../screens/inbox";

const IboxStack = createStackNavigator();

export default function InboxStack() {
    return (
      <IboxStack.Navigator 
          initialRouteName='Inbox'
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
          <IboxStack.Screen 
            name="Inbox" 
            component={InboxScreen} 
            options={{ title: 'Inbox' }}
          />
  
        </IboxStack.Navigator>
    );
  }