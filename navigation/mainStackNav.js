import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from "./homeStack";
import SavedStack from "./savedStack";
import ProfileStack from "./profileStack";
import TripsStack from "./tripsStack";
import InboxStack from "./inboxStack";

const Tab = createBottomTabNavigator();

function MainStackNav() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: '#ff0000',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
          <Tab.Screen
          name="SaveStack"
          component={SavedStack}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart"
                color={color}
                size={size}
              />
            ),
          }} />
          <Tab.Screen
            name="TripsStack"
            component={TripsStack}
            options={{
              tabBarLabel: 'Trips',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="bag-personal"
                  color={color}
                  size={size}
                />
              ),
            }} />
          <Tab.Screen
            name="InboxStack"
            component={InboxStack}
            options={{
              tabBarLabel: 'Inbox',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="message-text"
                  color={color}
                  size={size}
                />
              ),
            }} />
            <Tab.Screen
            name="ProfStack"
            component={ProfileStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }} />

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default MainStackNav;