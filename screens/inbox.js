import * as React from 'react';
import { View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function InboxScreen(props) {
  const { navigation } = props; // Always need access to navigation
    return (
      <View style={globalStyles.conatainer}>
        <Text style={globalStyles.titleText}>Inbox Screen</Text>
      </View>
    );
  }