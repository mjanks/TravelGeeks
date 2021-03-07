import * as React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SavedScreen(props) {
  // Using route.params this screen component can read the parameters passed from 
  // the Home screen. Below is the destructuring of route.param used to display the 
  // values passed from the Home screen. I also added navigation alongside 'route' 
  // and set equal to props, otherwise we can't use it with the TouchableOpacity 
  // to navigate.
  // const { route, navigation } = props; // using 'route' AND 'navigation'
  // const { item } = route.params; // deconstruction 'route'
  // const { name, home, species } = item;
    return (
      <View style={globalStyles.conatainer}>

        <Text style={globalStyles.titleText}>Saved Screen</Text>

        <View style={globalStyles.card}>
          {/* Now we can get the params that were passed from the Home screen. */}
          {/* <Text style={globalStyles.cardText}>Name: {name}</Text>
          <Text style={globalStyles.cardText}>Home Planet: {home}</Text>
          <Text style={globalStyles.cardText}>Species: {species}</Text> */}
          <Text style={globalStyles.cardText}>Card with a saved property</Text>
        </View>

        {/* <TouchableOpacity
          style={globalStyles.buttonContainer}
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={globalStyles.buttonText}>Settings</Text>
        </TouchableOpacity> */}

        {/* <View style={globalStyles.conatainer}>
            <Button title="Go to Home" onPress={() => navigation.popToTop()('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View> */}

      </View>
    );
  }