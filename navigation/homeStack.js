import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";

const HStack = createStackNavigator(); // creates the stack navigator 'HStack'

export default function HomeStack() {
    return (
      <HStack.Navigator 
          // set initial route, default is the first screen in the list below, 
          // which is usually Home.
          initialRouteName='Home'
          // 'screenOptions' lets you apply common styles to the header across 
          // the navigator
          screenOptions={{
            // allows swipe from left to right to go back one screen on Android, 
            // IOS this is default behavior
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: '#fbdddd'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: '#101010',
            // makes the back button title invisible on IOS,
            // Android only shows the arrow so it's ok.
            headerBackTitleVisible: false
          }}
          headerMode='none'
        >
          <HStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Home Screen' }}
          />
          <HStack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ title: 'Login Screen' }}
          />
  
          {/* <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
            // options={{ title: 'Details Screen' }}
            options={({ route }) => ({
              title: route.params.item.name
            })}
          /> */}
  
        </HStack.Navigator>
    );
  }